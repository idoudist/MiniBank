namespace Application.Common;

public interface IUnitOfWork
{
    ITransactionRepository TransactionRepository { get; }
    Task<bool> Complete();
    bool HasChanges();
}
