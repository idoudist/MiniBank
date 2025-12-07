using Application.Transactions.Interfaces;
using Application.Users.Interfaces;

namespace Api.Unit.Tests.Controllers;

public class TransactionControllerTests
{
    private readonly ITransactionApplicationService _transactionService;
    private readonly IUserApplicationService _userService;
    public TransactionControllerTests()
    {
        _transactionService = A.Fake< ITransactionApplicationService > ();
        _userService = A.Fake < IUserApplicationService >();
    }

    [Fact]
    public async void GetBalance_ReturnsOkWithBalance() {
        #region Arrange

        var userId = 1;
        var userName = "testuser";
        var accountId = 10;
        var expectedBalance = 1000.0;

        var claimsPrincipalFake = A.Fake<ClaimsPrincipal>();
        A.CallTo(() => claimsPrincipalFake.FindFirst(ClaimTypes.NameIdentifier)).Returns(new Claim(ClaimTypes.NameIdentifier, userId.ToString()));

        var user = new AppUser
        {
            UserName = userName,
            BankAccounts = new List<BankAccountEntity>
                {
                    new BankAccountEntity
                    {
                        Id = accountId,
                        Name = "Main",
                        CurrentBalance = expectedBalance,
                        AppUserId = userId
                    }
                }
        };

        A.CallTo(() => _userService.GetUserByIdAsync(userId)).Returns(Task.FromResult(user));
        A.CallTo(() => _transactionService.GetBalanceAsync(accountId)).Returns(Task.FromResult(expectedBalance));

        var controller = new TransactionController(_transactionService, _userService);
        controller.ControllerContext = new ControllerContext
        {
            HttpContext = new DefaultHttpContext { User = claimsPrincipalFake }
        };

        #endregion
        #region Act
        ActionResult<double> result = await controller.GetBalance();
        #endregion
        #region Assert
        result.Should().NotBeNull();
        result.Should().BeOfType<ActionResult<double>>();
        // Check if the result is OkObjectResult and get the Value property
        result.Result.Should().BeOfType<OkObjectResult>()
            .Which.Value.Should().BeAssignableTo<double>()
            .Which.Should().Be(expectedBalance);
        #endregion
    }
}
