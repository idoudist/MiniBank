namespace Application.Contracts.Repositories;

public interface IUserRepository
{
    Task<AppUser> GetUserByIdAsync(int id);
}