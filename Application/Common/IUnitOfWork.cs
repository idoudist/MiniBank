namespace Application.Common;

public interface IUnitOfWork
{
    IUserRepository UserRepository { get; }
    ITransactionRepository TransactionRepository { get; }
    Task<bool> Complete();
    bool HasChanges();
}
