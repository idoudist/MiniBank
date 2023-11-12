namespace Application.BankAccounts;

public interface IBankAccountService
{
    Task<bool> AddBankAccountAsync(BankAccountCreationRequest request);
}
