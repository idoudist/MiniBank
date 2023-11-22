using Domain.Dtos.Shared;

namespace Infrastructure.Services;

public class UserService: IUserService
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public UserService(IUnitOfWork unitOfWork, UserManager<AppUser> userManager, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _userManager = userManager;
        _mapper = mapper;
    }

    public async Task<AppUser> GetUserByIdAsync(int id)
    {
        return await _unitOfWork.UserRepository.GetUserByIdAsync(id);
    }

    public async Task<AppUser> GetUserByUsernameAsync(string username)
    {
        return await _unitOfWork.UserRepository.GetUserByUsernameAsync(username);
    }

    public async Task<bool> UsernameExistAsync(string username)
    {
        return await _userManager.Users.AnyAsync(user => user.UserName == username.ToLowerInvariant());
    }

    public async Task<AppUser> AddClientAsync(RegisterDto model)
    {
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
