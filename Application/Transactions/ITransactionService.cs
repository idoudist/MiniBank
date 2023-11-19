namespace Application.Transactions;

public interface ITransactionService
{
    Task<bool> AddDepositAsync(OperationDto operation);
    Task<bool> WithdrowAsync(OperationDto operation);
    Task<double> GetBalanceAsync(int accountId);
    Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams);
    Task<TransactionDto> GetTransactionAsync(int id);
}
