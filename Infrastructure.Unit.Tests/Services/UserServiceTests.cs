namespace Infrastructure.Unit.Tests.Services;

public class UserServiceTests
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public UserServiceTests()
    {
        _unitOfWork = A.Fake<IUnitOfWork>();
        _userManager = A.Fake<UserManager<AppUser>>();
        _mapper = A.Fake<IMapper>();
    }

    public static IEnumerable<object[]> AddClientTestCases()
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
    [MemberData(nameof(AddClientTestCases))]
    public async void AddClient_ReturnAppUser(RegisterDto model)
    {
        #region Arrange
        AppUser user = A.Fake<AppUser>();
        A.CallTo(() => _mapper.Map<AppUser>(model)).Returns(user);
        var successResult = IdentityResult.Success;
        A.CallTo(() => _userManager.CreateAsync(user, model.Password)).Returns(successResult);
        A.CallTo(() => _userManager.AddToRoleAsync(user, "Client")).Returns(successResult);
        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper);
        #endregion
        #region Act
        var result = await service.AddClientAsync(model);
        #endregion
        #region Assert
        result.Should().NotBeNull();
        result.Should().BeAssignableTo<AppUser>();
        #endregion
    }
}
