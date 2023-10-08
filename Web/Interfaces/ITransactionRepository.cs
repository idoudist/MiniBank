namespace Web.Interfaces;

public interface ITransactionRepository
{
    Task AddTransactionAsync(TransactionEntity transaction);
    Task<float> GetBalanceAsync();
    Task<IEnumerable<TransactionEntity>> GetTransactionsAsync();
}
