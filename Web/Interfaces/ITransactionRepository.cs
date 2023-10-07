using Web.Entities;

namespace Web.Interfaces;

public interface ITransactionRepository
{
    Task<bool> AddTransaction(TransactionEntity transaction);
    Task<float> GetBalance();
    Task<IEnumerable<TransactionEntity>> GetTransactions();
}
