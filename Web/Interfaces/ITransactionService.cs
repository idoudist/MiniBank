using Web.Dtos;

namespace Web.Interfaces;

public interface ITransactionService
{
    Task<bool> AddDeposit(OperationDto operation);
    Task<bool> Withdrow(OperationDto operation);
    Task<float> GetBalance();
    Task<IEnumerable<TransactionDto>> GetTransactions();
}
