using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Web.Data;

namespace Web.Repositories;

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

    public async Task<float> GetBalanceAsync()
    {
        return await _context.Transactions.SumAsync( t => t.Credit - t.Debit );
    }

    public async Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams)
    {
        var query = _context.Transactions.AsQueryable();
        // projected queries to TransactionDto (create a custom select query instead of select * )
        var projectedQuery = query.ProjectTo<TransactionDto>(_mapper.ConfigurationProvider).AsNoTracking();
        return await PagedList<TransactionDto>.CreateAsync(projectedQuery, transactionParams.PageNumber, transactionParams.PageSize);
    }

    public async Task<TransactionEntity> GetTransactionAsync(int id)
    {
        return await _context.Transactions.FindAsync(id);
    }
}

