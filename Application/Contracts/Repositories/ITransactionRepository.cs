namespace Application.Contracts.Repositories;

public interface ITransactionRepository
{
    Task AddTransactionAsync(TransactionEntity transaction);
    Task<double> GetBalanceAsync(int accountId);
    Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams);
    Task<TransactionEntity> GetTransactionAsync(int id);

    // sql based command
    void TruncateGroupTables();
}
