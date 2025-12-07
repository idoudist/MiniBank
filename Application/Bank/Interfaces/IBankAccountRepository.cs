namespace Application.Bank.Interfaces;

public interface IBankAccountRepository
{
    Task AddBankAccountAsync(BankAccountEntity request);
}
