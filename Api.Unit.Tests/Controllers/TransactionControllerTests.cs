namespace Api.Unit.Tests.Controllers;

public class TransactionControllerTests
{
    private readonly ITransactionService _transactionService;
    private readonly IUserService _userService;
    public TransactionControllerTests()
    {
        _transactionService = A.Fake< ITransactionService > ();
        _userService = A.Fake < IUserService >();
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
        var okObjectResult = result.Result.Should().BeOfType<OkObjectResult>().Subject;
        var actualBalance = okObjectResult.Value.Should().BeAssignableTo<double>().Subject;
        actualBalance.Should().Be(expectedBalance);
        #endregion
    }
}
