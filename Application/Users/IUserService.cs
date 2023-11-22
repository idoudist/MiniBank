using Domain.Dtos.Shared;
using Domain.Entities.Identity;

namespace Application.Users;

public interface IUserService
{
    Task<AppUser> GetUserByIdAsync(int id);
    Task<AppUser> GetUserByUsernameAsync(string username);
    Task<bool> UsernameExistAsync(string username);
    Task<AppUser> AddClientAsync(RegisterDto model);
}
