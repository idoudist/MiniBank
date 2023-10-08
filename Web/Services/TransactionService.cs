using AutoMapper;

namespace Web.Services;

public class TransactionService : ITransactionService
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;

    public TransactionService(IUnitOfWork unitOfWork, IMapper mapper)
    {
        _unitOfWork = unitOfWork;
        _mapper = mapper;
    }

    public async Task AddDeposit(OperationDto operation)
    {
        TransactionEntity transaction = new TransactionEntity
        {
            Credit = operation.Amount,
            Debit = 0,
            TransactionType = TransactionType.Deposit
        };
        await _unitOfWork.TransactionRepository.AddTransactionAsync(transaction);
    }

    public async Task<float> GetBalance()
    {
        return await _unitOfWork.TransactionRepository.GetBalanceAsync();
    }

    public async Task<IEnumerable<TransactionDto>> GetTransactions()
    {
        var transactions = await _unitOfWork.TransactionRepository.GetTransactionsAsync();
        return _mapper.Map<List<TransactionDto>>(transactions);
    }

    public async Task Withdrow(OperationDto operation)
    {
        TransactionEntity transaction = new TransactionEntity
        {
            Credit = 0,
            Debit = operation.Amount,
            TransactionType = TransactionType.Withdrowl
        };
        await _unitOfWork.TransactionRepository.AddTransactionAsync(transaction);
    }
}
