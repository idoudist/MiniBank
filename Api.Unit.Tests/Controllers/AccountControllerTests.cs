using Application.Contracts.ApplicationServices;

namespace Api.Unit.Tests.Controllers;

public class AccountControllerTests
{
    private readonly SignInManager<AppUser> _signInManager;
    private readonly ITokenService _tokenService;
    private readonly IBankAccountApplicationService _bankAccountService;
    private readonly IUserApplicationService _userService;
    private readonly IMapper _mapper;
    public AccountControllerTests()
    {
        _signInManager = A.Fake<SignInManager<AppUser>>();
        _tokenService = A.Fake<ITokenService>();
        _bankAccountService = A.Fake<IBankAccountApplicationService>();
        _userService = A.Fake<IUserApplicationService>();
        _mapper = A.Fake<IMapper>();
    }

    public static IEnumerable<object[]> RegisterTestCases()
    {
        yield return new object[] {
            new RegisterDto {
                Username = "john_doe",
                Gender = "Male",
                DateOfBirth = new DateTime(1990, 1, 1),
                City = "New York",
                Country = "USA",
                Password = "password123"
            }
        };

        yield return new object[] {
            new RegisterDto {
                Username = "jane_smith",
                Gender = "Female",
                DateOfBirth = new DateTime(1985, 5, 10),
                City = "Los Angeles",
                Country = "USA",
                Password = "securepass"
            }
        };

        yield return new object[] {
            new RegisterDto {
                Username = "bob_jones",
                Gender = "Male",
                DateOfBirth = new DateTime(1980, 8, 15),
                City = "London",
                Country = "UK",
                Password = "pass123"
            }
        };

    }

    [Theory]
    [MemberData(nameof(RegisterTestCases))]
    public async void Register_ReturnOkWithUserDto(RegisterDto model)
    {
        #region Arrange
        A.CallTo(() => _userService.UsernameExistAsync(model.Username)).Returns(Task.FromResult(false));
        AppUser user = A.Fake<AppUser>();
        A.CallTo(() => _mapper.Map<AppUser>(model)).Returns(user);
        A.CallTo(() => _userService.AddClientAsync(model)).Returns(user);
        var bankAccount = new BankAccountCreationRequest{
            Name = "Main Account",
            AppUserId = user.Id,
            IsLocked = false,
            IsMain = true
        };
        A.CallTo(() => _bankAccountService.AddBankAccountAsync(bankAccount)).Returns(true);
        var controller = new AccountController(_signInManager, _tokenService, _bankAccountService, _userService, _mapper);
        #endregion
        #region Act
        var result = await controller.Register(model);
        #endregion
        #region Assert
        result.Should().NotBeNull();
        result.Should().BeOfType<ActionResult<UserDto>>();
        #endregion
    }
}
