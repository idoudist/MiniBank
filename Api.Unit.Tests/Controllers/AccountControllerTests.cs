namespace Api.Unit.Tests.Controllers;

public class AccountControllerTests
{
    private readonly UserManager<AppUser> _userManager;
    private readonly SignInManager<AppUser> _signInManager;
    private readonly ITokenService _tokenService;
    private readonly IBankAccountService _bankAccountService;
    private readonly IMapper _mapper;
    public AccountControllerTests()
    {
        _userManager = A.Fake<UserManager<AppUser>>();
        _signInManager = A.Fake<SignInManager<AppUser>>();
        _tokenService = A.Fake<ITokenService>();
        _bankAccountService = A.Fake<IBankAccountService>();
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
    public async void Register_ReturnOkWithUserDto(RegisterDto registerDto)
    {
        #region Arrange
        AppUser user = A.Fake<AppUser>();
        A.CallTo(() => _mapper.Map<AppUser>(registerDto)).Returns(user);
        var controller = new AccountController(_userManager, _signInManager, _tokenService, _bankAccountService, _mapper);
        #endregion
        #region Act
        var result = await controller.Register(registerDto);
        #endregion
        #region Assert
        result.Should().NotBeNull();
        result.Should().BeOfType<ActionResult<UserDto>>();
        #endregion
    }
}
