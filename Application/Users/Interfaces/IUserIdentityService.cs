namespace Application.Users.Interfaces;

public interface IUserIdentityService
{
    Task<AppUser> GetUserByIdAsync(int id);
    Task<AppUser> GetUserByUsernameAsync(string username);
    Task<bool> UsernameExistAsync(string username);
    Task<AppUser> AddClientAsync(RegisterDto model);
}
