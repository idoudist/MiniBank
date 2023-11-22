namespace Application.Users;

public interface IUserRepository
{
    Task<AppUser> GetUserByIdAsync(int id);
}