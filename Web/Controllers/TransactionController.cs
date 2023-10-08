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
            var result = await _transactionService.AddDeposit(operation);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost("withdrow")]
        public async Task<ActionResult> Withdrow([FromBody] OperationDto operation)
        {
            var result = await _transactionService.Withdrow(operation);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
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
