namespace Application.Users.Interfaces;

public interface IUserRepository
{
    Task<AppUser> GetUserByIdAsync(int id);
}