namespace Web.Interfaces;

public interface ITransactionRepository
{
    Task AddTransactionAsync(TransactionEntity transaction);
    Task<float> GetBalanceAsync();
    Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams);
    Task<TransactionEntity> GetTransactionAsync(int id);
}
