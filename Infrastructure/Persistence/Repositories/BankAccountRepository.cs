using Infrastructure.Persistence.Context;

namespace Infrastructure.Persistence.Repositories;

public class BankAccountRepository : IBankAccountRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public BankAccountRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public async Task AddBankAccountAsync(BankAccountEntity request)
    {
        await _context.BankAccounts.AddAsync(request);
    }
}
