using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Dtos;

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
            await _transactionService.AddDeposit(operation);
            return Ok();
        }

        [HttpPost("withdrow")]
        public async Task<ActionResult> Withdrow([FromBody] OperationDto operation)
        {
            await _transactionService.Withdrow(operation);
            return Ok();
        }

        [HttpGet("balance")]
        public async Task<ActionResult<float>> GetBalance()
        {
            float balance = await _transactionService.GetBalance();
            return Ok(balance);
        }

        [HttpGet("transactions")]
        public async Task<ActionResult<IEnumerable<TransactionDto>>> GetTransactions()
        {
            var transactions = await _transactionService.GetTransactions();
            return Ok(transactions);
        }

        private async Task DummyOneSecondWait()
        {
            await Task.Delay(1000);
        }

    }
}
