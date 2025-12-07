namespace Infrastructure.Repositories;

public class TransactionRepository : ITransactionRepository
{
    private readonly DataContext _context;
    private readonly IMapper _mapper;

    public TransactionRepository(DataContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task AddTransactionAsync(TransactionEntity transaction)
    {
        await _context.Transactions.AddAsync(transaction);
    }

    public async Task<double> GetBalanceAsync(int accountId)
    {
        return await _context.Transactions.Where(x => x.BankAccountId == accountId).SumAsync( t => t.Credit - t.Debit );
    }

    public async Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams)
    {
        var query = _context.Transactions
            .Where(t => t.BankAccountId == transactionParams.AccountId)
            .AsQueryable();
        // projected queries to TransactionDto (create a custom select query instead of select * )
        var projectedQuery = query.ProjectTo<TransactionDto>(_mapper.ConfigurationProvider).AsNoTracking();
        return await PagedList<TransactionDto>.CreateAsync(projectedQuery, transactionParams.PageNumber, transactionParams.PageSize);
    }

    public async Task<TransactionEntity> GetTransactionAsync(int id)
    {
        return await _context.Transactions.FindAsync(id);
    }

    public void TruncateGroupTables()
    {
        _context.Transactions.FromSqlRaw("DELETE FROM [Transactions]");
    }
}

