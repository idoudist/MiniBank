using Infrastructure.Services;

namespace Api.Unit.Tests.Controllers;

public class AccountControllerTests
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;
    private readonly ITokenService _tokenService;
    private readonly IBankAccountService _bankAccountService;
    private readonly IUserService _userService;
    private readonly IMapper _mapper;
    public AccountControllerTests()
    {
        _userManager = A.Fake<UserManager<AppUser>>();
        _signInManager = A.Fake<SignInManager<AppUser>>();
        _tokenService = A.Fake<ITokenService>();
        _bankAccountService = A.Fake<IBankAccountService>();
        _userService = A.Fake<IUserService>();
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
        A.CallTo(() => _userService.UsernameExist(model.Username)).Returns(Task.FromResult(false));
        AppUser user = A.Fake<AppUser>();
        A.CallTo(() => _mapper.Map<AppUser>(model)).Returns(user);
        var success = new IdentityResult();
        A.CallTo(() => _userManager.CreateAsync(user, model.Password)).Returns(success);
        A.CallTo(() => _userManager.AddToRoleAsync(user, "Client")).Returns(success);
        var bankAccount = new BankAccountCreationRequest{
            Name = "Main Account",
            AppUserId = user.Id,
            IsLocked = false,
            IsMain = true
        };
        A.CallTo(() => _bankAccountService.AddBankAccountAsync(bankAccount)).Returns(true);
        var controller = new AccountController(_userManager, _signInManager, _tokenService, _bankAccountService, _userService, _mapper);
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
