using Application.Contracts.Repositories;

namespace Data.Repositories;

public class UserRepository : IUserRepository
{
    private readonly DataContext _context;

    public UserRepository(DataContext context)
    {
        _context = context;
    }

    public async Task<AppUser> GetUserByIdAsync(int id)
    {
        return await _context.Users.Include(u => u.BankAccounts).FirstOrDefaultAsync(u => u.Id == id);
    }
}
