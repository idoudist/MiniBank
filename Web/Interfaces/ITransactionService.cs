using Web.Dtos;

namespace Web.Interfaces;

public interface ITransactionService
{
    Task AddDeposit(OperationDto operation);
    Task Withdrow(OperationDto operation);
    Task<float> GetBalance();
    Task<IEnumerable<TransactionDto>> GetTransactions();
}
