namespace Application.Contracts.ApplicationServices;

public interface IBankAccountApplicationService
{
    Task<bool> AddBankAccountAsync(BankAccountCreationRequest request);
}
