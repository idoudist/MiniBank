namespace Infrastructure.ApplicationServices;

public class BankAccountApplicationService : IBankAccountApplicationService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public BankAccountApplicationService(IUnitOfWork unitOfWork, IMapper mapper)
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
