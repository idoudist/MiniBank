namespace Application.Common.Interfaces;

public interface IUnitOfWork
{
    IUserRepository UserRepository { get; }
    ITransactionRepository TransactionRepository { get; }
    IBankAccountRepository BankAccountRepository { get; }
    Task<bool> Complete();
    bool HasChanges();
}
