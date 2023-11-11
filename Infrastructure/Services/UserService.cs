namespace Infrastructure.Services;

public class UserService: IUserService
{
    private readonly IUnitOfWork _unitOfWork;

    public UserService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<AppUser> GetUserByIdAsync(int id)
    {
        return await _unitOfWork.UserRepository.GetUserByIdAsync(id);
    }

    public async Task<AppUser> GetUserByUsernameAsync(string username)
    {
        return await _unitOfWork.UserRepository.GetUserByUsernameAsync(username);
    }

}
