namespace Application.Transactions;

public interface ITransactionRepository
{
    Task AddTransactionAsync(TransactionEntity transaction);
    Task<float> GetBalanceAsync(int accountId);
    Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams);
    Task<TransactionEntity> GetTransactionAsync(int id);

    // sql based command
    void TruncateGroupTables();
}
