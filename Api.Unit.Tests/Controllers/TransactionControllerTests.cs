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
    public void GetBalance_ReturnOk() {
        #region Arrange
        var controller = new TransactionController(_transactionService, _userService);
        #endregion
        #region Act
        var result = controller.GetBalance();
        #endregion
        #region Assert
        result.Should().NotBeNull();
        #endregion
    }
}
