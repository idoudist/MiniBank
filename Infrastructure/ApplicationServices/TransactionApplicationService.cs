namespace Infrastructure.ApplicationServices;

public class TransactionApplicationService : ITransactionApplicationService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public TransactionApplicationService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task<bool> AddDepositAsync(OperationDto operation)
    {
        TransactionEntity transaction = new TransactionEntity
        {
            Credit = operation.Amount,
            Debit = 0,
            TransactionType = TransactionType.Deposit,
            Date = DateTime.Now,
            BankAccountId = operation.BankAccountId,
        };
        await _unitOfWork.TransactionRepository.AddTransactionAsync(transaction);
        return await _unitOfWork.Complete();
    }

    public async Task<double> GetBalanceAsync(int accountId)
    {
        return await _unitOfWork.TransactionRepository.GetBalanceAsync(accountId);
    }

    public async Task<PagedList<TransactionDto>> GetTransactionsAsync(TransactionParams transactionParams)
    {
        return await _unitOfWork.TransactionRepository.GetTransactionsAsync(transactionParams);
    }

    public async Task<TransactionDto> GetTransactionAsync(int id)
    {
        var transaction = await _unitOfWork.TransactionRepository.GetTransactionAsync(id);
        return _mapper.Map<TransactionDto>(transaction);
    }

    public async Task<bool> WithdrowAsync(OperationDto operation)
    {
        TransactionEntity transaction = new TransactionEntity
        {
            Credit = 0,
            Debit = operation.Amount,
            TransactionType = TransactionType.Withdrowl,
            Date = DateTime.Now,
            BankAccountId = operation.BankAccountId
        };
        await _unitOfWork.TransactionRepository.AddTransactionAsync(transaction);
        return await _unitOfWork.Complete();
    }
}
