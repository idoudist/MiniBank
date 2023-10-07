using Web.Entities;
using Web.Interfaces;

namespace Web.Services;

public class TransactionRepository : ITransactionRepository
{
    public Task<bool> AddTransaction(TransactionEntity transaction)
    {
        throw new NotImplementedException();
    }

    public Task<float> GetBalance()
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<TransactionEntity>> GetTransactions()
    {
        throw new NotImplementedException();
    }
}
