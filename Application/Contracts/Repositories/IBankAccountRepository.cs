namespace Application.Contracts.Repositories;

public interface IBankAccountRepository
{
    Task AddBankAccountAsync(BankAccountEntity request);
}
