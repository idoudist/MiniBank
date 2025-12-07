namespace Application.Bank.Interfaces;

public interface IBankAccountApplicationService
{
    Task<bool> AddBankAccountAsync(BankAccountCreationRequest request);
}
