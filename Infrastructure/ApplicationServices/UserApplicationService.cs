using FluentValidation;

namespace Infrastructure.ApplicationServices;

public class UserApplicationService: IUserApplicationService
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly IValidator<RegisterDto> _registerValidator;

    public UserApplicationService(IUnitOfWork unitOfWork, UserManager<AppUser> userManager, IMapper mapper, IValidator<RegisterDto> registerValidator)
    {
        _unitOfWork = unitOfWork;
        _userManager = userManager;
        _mapper = mapper;
        _registerValidator = registerValidator;
    }

    public async Task<AppUser> GetUserByIdAsync(int id)
    {
        return await _unitOfWork.UserRepository.GetUserByIdAsync(id);
    }

    public async Task<AppUser> GetUserByUsernameAsync(string username)
    {
        var user = await _userManager.Users
            .Include(user => user.BankAccounts)
            .FirstOrDefaultAsync(user => user.UserName == username.ToLowerInvariant());
        return user;
    }

    public async Task<bool> UsernameExistAsync(string username)
    {
        return await _userManager.Users.AnyAsync(user => user.UserName == username.ToLowerInvariant());
    }

    public async Task<AppUser> AddClientAsync(RegisterDto model)
    {
        // using fluent validation to validate the model
        var validationResult = await _registerValidator.ValidateAsync(model);
        if (!validationResult.IsValid)
        {
            throw new ValidationException(validationResult.Errors);
        }
        // map RegisterDto to AppUser entity
        var user = _mapper.Map<AppUser>(model);
        
        // assign password and username
        user.UserName = model.Username.ToLowerInvariant();
        var result = await _userManager.CreateAsync(user, model.Password);

        if (!result.Succeeded)
        {
            return null;
        }

        // assign Member role to user
        var roleResult = await _userManager.AddToRoleAsync(user, "Client");
        if (!roleResult.Succeeded)
        {
            return null;
        }
        return user;
    }
}
