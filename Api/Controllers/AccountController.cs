namespace Api.Controllers;

public class AccountController : BaseApiController
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;
    private readonly ITokenService _tokenService;
    private readonly IBankAccountService _bankAccountService;
    private readonly IUserService _userService;
    private readonly IMapper _mapper;

    public AccountController(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager,
        ITokenService tokenService, IBankAccountService bankAccountService, IUserService userService, IMapper mapper)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _tokenService = tokenService;
        _bankAccountService = bankAccountService;
        _userService = userService;
        _mapper = mapper;
    }

    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterDto model)
    {
        bool usernameExist = await _userService.UsernameExist(model.Username);

        if (usernameExist)
        {
            return BadRequest("Username is taken");
        }

        var user = _mapper.Map<AppUser>(model);


        // assign password and username
        user.UserName = model.Username.ToLowerInvariant();
        var result = await _userManager.CreateAsync(user, model.Password);

        if (!result.Succeeded)
        {
            return BadRequest(result.Errors);
        }

        // assign Member role to user
        var roleResult = await _userManager.AddToRoleAsync(user, "Client");
        if (!roleResult.Succeeded)
        {
            return BadRequest(result.Errors);
        }

        // create Bank Account

        var accountCreated = await _bankAccountService.AddBankAccountAsync(new BankAccountCreationRequest{
            Name = "Main Account",
            AppUserId = user.Id,
            IsLocked = false,
            IsMain = true
        });

        if (!accountCreated)
        {
            return BadRequest("Error creating account");
        }

        // return results
        return new UserDto
        {
            Username = user.UserName,
            Token = await _tokenService.CreateToken(user),
            BankAccounts = _mapper.Map<List<BankAccountDto>>(user.BankAccounts),
            Gender = user.Gender
        };
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserDto>> Login(LoginDto model)
    {
        var user = await _userManager.Users
            .Include(user => user.BankAccounts)
            .FirstOrDefaultAsync(user => user.UserName == model.Username.ToLowerInvariant());
        if (user == null)
        {
            return Unauthorized("Invalid Username");
        }

        var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);

        if (!result.Succeeded)
        {
            return Unauthorized();
        }

        return new UserDto
        {
            Username = user.UserName,
            BankAccounts = _mapper.Map<List<BankAccountDto>>(user.BankAccounts),
            Token = await _tokenService.CreateToken(user),
            Gender = user.Gender
        };
    }
}
