namespace Infrastructure.Services;

public class UserService: IUserService
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IUnitOfWork _unitOfWork;

    public UserService(IUnitOfWork unitOfWork, UserManager<AppUser> userManager)
    {
        _unitOfWork = unitOfWork;
        _userManager = userManager;
    }

    public async Task<AppUser> GetUserByIdAsync(int id)
    {
        return await _unitOfWork.UserRepository.GetUserByIdAsync(id);
    }

    public async Task<AppUser> GetUserByUsernameAsync(string username)
    {
        return await _unitOfWork.UserRepository.GetUserByUsernameAsync(username);
    }

    public async Task<bool> UsernameExist(string username)
    {
        return await _userManager.Users.AnyAsync(user => user.UserName == username.ToLowerInvariant());
    }
}
