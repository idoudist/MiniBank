using Web.Dtos;
using Web.Interfaces;

namespace Web.Services;

public class TransactionService : ITransactionService
{
    public Task<bool> AddDeposit(OperationDto operation)
    {
        throw new NotImplementedException();
    }

    public Task<float> GetBalance()
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<TransactionDto>> GetTransactions()
    {
        throw new NotImplementedException();
    }

    public Task<bool> Withdrow(OperationDto operation)
    {
        throw new NotImplementedException();
    }
}
