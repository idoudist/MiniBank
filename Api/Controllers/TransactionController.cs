using Application.Transactions.Dtos;
using Application.Transactions.Interfaces;
using Application.Users.Interfaces;

namespace Api.Controllers
{
    [Authorize]
    public class TransactionController : BaseApiController
    {
        private readonly ITransactionApplicationService _transactionService;
        private readonly IUserApplicationService _userService;
        public TransactionController(ITransactionApplicationService transactionService, IUserApplicationService userService)
        {
            _transactionService = transactionService;
            _userService = userService;
        }

        [HttpPost("deposit")]
        public async Task<ActionResult> AddDeposit([FromBody] OperationDto operation)
        {
            if(operation.Amount <= 0)
            {
                return BadRequest();
            }
            var userId = User.GetUserId();
            var currentUser = await _userService.GetUserByIdAsync(userId);
            operation.BankAccountId = currentUser.BankAccounts.FirstOrDefault().Id;
            var result = await _transactionService.AddDepositAsync(operation);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("withdrow")]
        public async Task<ActionResult> Withdrow([FromBody] OperationDto operation)
        {
            if (operation.Amount <= 0)
            {
                return BadRequest();
            }
            
            var userId = User.GetUserId();
            var currentUser = await _userService.GetUserByIdAsync(userId);
            operation.BankAccountId = currentUser.BankAccounts.FirstOrDefault().Id;
            var balance = await _transactionService.GetBalanceAsync(operation.BankAccountId);

            if((balance - operation.Amount) < 0)
            {
                return BadRequest("Insuffissiant balance");
            }

            var result = await _transactionService.WithdrowAsync(operation);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("balance")]
        public async Task<ActionResult<double>> GetBalance()
        {
            var userId = User.GetUserId();
            var currentUser = await _userService.GetUserByIdAsync(userId);
            var accountId = currentUser.BankAccounts.FirstOrDefault().Id;
            double balance = await _transactionService.GetBalanceAsync(accountId);
            return Ok(balance);
        }

        [HttpGet("transactions")]
        public async Task<ActionResult<IEnumerable<TransactionDto>>> GetTransactions([FromQuery] TransactionParams transactionParams)
        {
            var userId = User.GetUserId();
            var currentUser = await _userService.GetUserByIdAsync(userId);
            transactionParams.AccountId = currentUser.BankAccounts.FirstOrDefault().Id;
            var transactions = await _transactionService.GetTransactionsAsync(transactionParams);
            // add pagination header
            Response.AddPaginationHeader(transactions.CurrentPage, transactions.PageSize, transactions.TotalCount, transactions.TotalPages);
            return Ok(transactions);
        }

        [HttpGet("transaction/{id}")]
        public async Task<ActionResult<IEnumerable<TransactionDto>>> GetTransactionById(int id)
        {
            var transaction = await _transactionService.GetTransactionAsync(id);
            if(transaction == null)
            {
                return NotFound("Transaction Not Found");
            }
            return Ok(transaction);
        }

    }
}
