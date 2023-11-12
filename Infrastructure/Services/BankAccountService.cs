namespace Infrastructure.Services;

public class BankAccountService : IBankAccountService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public BankAccountService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task<bool> AddBankAccountAsync(BankAccountCreationRequest request)
    {
        BankAccountEntity account = _mapper.Map<BankAccountEntity>(request);
        await _unitOfWork.BankAccountRepository.AddBankAccountAsync(account);
        return await _unitOfWork.Complete();
    }
}
