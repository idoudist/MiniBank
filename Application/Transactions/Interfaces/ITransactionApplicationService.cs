namespace Application.Transactions.Interfaces;

public interface ITransactionApplicationService
{
    Task<bool> AddDepositAsync(OperationDto operation);
    Task<bool> WithdrowAsync(OperationDto operation);
    Task<double> GetBalanceAsync(int accountId);
    Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams);
    Task<TransactionDto> GetTransactionAsync(int id);
}
