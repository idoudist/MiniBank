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
    public async Task AddClientAsync_ShouldReturnUser_WhenCreationAndRoleAssignmentSucceed(RegisterDto model)
    {
        // Arrange
        var mappedUser = new AppUser
        {
            UserName = model.Username,
            Gender = model.Gender,
            DateOfBirth = model.DateOfBirth,
            City = model.City,
            Country = model.Country
        };

        A.CallTo(() => _mapper.Map<AppUser>(model))
            .Returns(mappedUser);

        A.CallTo(() => _userManager.CreateAsync(mappedUser, model.Password))
            .Returns(IdentityResult.Success);

        A.CallTo(() => _userManager.AddToRoleAsync(mappedUser, "Client"))
            .Returns(IdentityResult.Success);

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper);

        // Act
        var result = await service.AddClientAsync(model);

        // Assert
        result.Should().NotBeNull();
        result.Should().Be(mappedUser);

        mappedUser.UserName.Should().Be(model.Username.ToLowerInvariant());

        A.CallTo(() => _userManager.CreateAsync(mappedUser, model.Password))
            .MustHaveHappenedOnceExactly();

        A.CallTo(() => _userManager.AddToRoleAsync(mappedUser, "Client"))
            .MustHaveHappenedOnceExactly();
    }

    [Fact]
    public async Task AddClientAsync_ShouldReturnNull_WhenUserCreationFails()
    {
        // Arrange
        var model = new RegisterDto { Username = "John", Password = "123456" };

        var mappedUser = new AppUser();
        A.CallTo(() => _mapper.Map<AppUser>(model)).Returns(mappedUser);

        A.CallTo(() => _userManager.CreateAsync(mappedUser, model.Password))
            .Returns(IdentityResult.Failed(new IdentityError { Description = "Invalid" }));

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper);

        // Act
        var result = await service.AddClientAsync(model);

        // Assert
        result.Should().BeNull();

        A.CallTo(() => _userManager.AddToRoleAsync(A<AppUser>._, A<string>._))
            .MustNotHaveHappened();
    }

    [Fact]
    public async Task AddClientAsync_ShouldReturnNull_WhenAddToRoleFails()
    {
        // Arrange
        var model = new RegisterDto { Username = "John", Password = "123456" };

        var mappedUser = new AppUser();
        A.CallTo(() => _mapper.Map<AppUser>(model)).Returns(mappedUser);

        A.CallTo(() => _userManager.CreateAsync(mappedUser, model.Password))
            .Returns(IdentityResult.Success);

        A.CallTo(() => _userManager.AddToRoleAsync(mappedUser, "Client"))
            .Returns(IdentityResult.Failed(new IdentityError { Description = "Role error" }));

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper);

        // Act
        var result = await service.AddClientAsync(model);

        // Assert
        result.Should().BeNull();
    }

}
