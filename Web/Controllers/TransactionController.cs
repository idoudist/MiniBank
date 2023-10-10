using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionService _transactionService;
        public TransactionController(ITransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpPost("deposit")]
        public async Task<ActionResult> AddDeposit([FromBody] OperationDto operation)
        {
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
            var result = await _transactionService.WithdrowAsync(operation);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("balance")]
        public async Task<ActionResult<float>> GetBalance()
        {
            float balance = await _transactionService.GetBalanceAsync();
            return Ok(balance);
        }

        [HttpGet("transactions")]
        public async Task<ActionResult<IEnumerable<TransactionDto>>> GetTransactions([FromQuery] TransactionParams transactionParams)
        {
            var transactions = await _transactionService.GetTransactionsAsync(transactionParams);
            // add pagination header
            Response.AddPaginationHeader(transactions.CurrentPage, transactions.PageSize, transactions.TotalCount, transactions.TotalPages);
            return Ok(transactions);
        }

        [HttpGet("transaction/{id}")]
        public async Task<ActionResult<IEnumerable<TransactionDto>>> GetTransactionById(int id)
        {
            var transaction = await _transactionService.GetTransactionAsync(id);
            return Ok(transaction);
        }

    }
}
