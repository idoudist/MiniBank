using Web.Dtos.Requests;
using Web.Dtos.Responses;

namespace Web.Interfaces;

public interface ITransactionService
{
    Task<bool> AddDepositAsync(OperationDto operation);
    Task<bool> WithdrowAsync(OperationDto operation);
    Task<float> GetBalanceAsync();
    Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams);
    Task<TransactionDto> GetTransactionAsync(int id);
}
