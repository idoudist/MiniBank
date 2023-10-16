namespace Web.Interfaces;

public interface IUnitOfWork
{
    ITransactionRepository TransactionRepository { get; }
    Task<bool> Complete();
    bool HasChanges();
}
