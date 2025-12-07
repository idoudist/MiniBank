namespace Application.Contracts.ApplicationServices;

public interface IUserApplicationService
{
    Task<AppUser> GetUserByIdAsync(int id);
    Task<AppUser> GetUserByUsernameAsync(string username);
    Task<bool> UsernameExistAsync(string username);
    Task<AppUser> AddClientAsync(RegisterDto model);
}
