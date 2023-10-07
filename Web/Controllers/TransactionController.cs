using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Dtos;

namespace Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        public TransactionController()
        {
        }

        [HttpPost("deposit")]
        public async Task<ActionResult<bool>> AddDeposit([FromBody] OperationDto operation)
        {
            await DummyOneSecondWait();
            return Ok(true);
        }

        [HttpPost("withdrow")]
        public async Task<ActionResult<bool>> Withdrow([FromBody] OperationDto operation)
        {
            await DummyOneSecondWait();
            return Ok(true);
        }

        [HttpGet("balance")]
        public async Task<ActionResult<float>> GetBalance()
        {
            await DummyOneSecondWait();
            return Ok(0);
        }

        [HttpGet("transactions")]
        public async Task<ActionResult<IEnumerable<TransactionDto>>> GetTransactions()
        {
            await DummyOneSecondWait();
            return Ok(null);
        }

        private async Task DummyOneSecondWait()
        {
            await Task.Delay(1000);
        }

    }
}
