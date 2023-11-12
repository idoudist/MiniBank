namespace Application.BankAccounts;

public interface IBankAccountRepository
{
    Task AddBankAccountAsync(BankAccountEntity request);
}
