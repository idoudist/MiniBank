using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Web.Data;
using Web.Entities;
using Web.Interfaces;

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

    public async Task<IEnumerable<TransactionEntity>> GetTransactionsAsync()
    {
        return await _context.Transactions.ToListAsync();
    }
}
