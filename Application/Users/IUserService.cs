using Domain.Entities.Identity;

namespace Application.Users;

public interface IUserService
{
    Task<AppUser> GetUserByIdAsync(int id);
    Task<AppUser> GetUserByUsernameAsync(string username);
    Task<bool> UsernameExist(string username);
}
