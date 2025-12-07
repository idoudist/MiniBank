using Application.Common.Interfaces;
using Application.Users.Dtos;
using Application.Users.Interfaces;
using Application.Users.Validation;
using Domain.Entities;
using Infrastructure.Unit.Tests.Helpers;

namespace Infrastructure.Unit.Tests.Services;

public class UserServiceTests
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    private readonly RegisterDtoValidator _validator;
    public UserServiceTests()
    {
        _unitOfWork = A.Fake<IUnitOfWork>();
        _userManager = A.Fake<UserManager<AppUser>>();
        _mapper = A.Fake<IMapper>();
        _validator = A.Fake<RegisterDtoValidator>();
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
    #region GetUserByIdAsync Tests
    [Fact]
    public async Task GetUserByIdAsync_ShouldReturnUser_WhenFound()
    {
        // Arrange
        var userId = 42;
        var expectedUser = new AppUser { Id = userId, UserName = "user42" };

        var repo = A.Fake<IUserRepository>();
        A.CallTo(() => _unitOfWork.UserRepository).Returns(repo);
        A.CallTo(() => repo.GetUserByIdAsync(userId)).Returns(Task.FromResult(expectedUser));

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper, _validator);

        // Act
        var result = await service.GetUserByIdAsync(userId);

        // Assert
        result.Should().NotBeNull();
        result.Should().Be(expectedUser);
    }
    #endregion

    #region GetUserByUsernameAsync Tests
    [Fact]
    public async Task GetUserByUsernameAsync_ShouldReturnUserWithBankAccounts_WhenUserExists()
    {
        // Arrange
        var userName = "testuser";
        var expectedUser = new AppUser
        {
            UserName = userName,
            BankAccounts = new List<BankAccountEntity>
            {
                new BankAccountEntity { Id = 1, Name = "Main", CurrentBalance = 100 }
            }
        };

        var users = new List<AppUser> { expectedUser };
        var asyncUsers = new TestAsyncEnumerable<AppUser>(users);

        A.CallTo(() => _userManager.Users).Returns(asyncUsers);

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper, _validator);

        // Act
        var result = await service.GetUserByUsernameAsync(userName);

        // Assert
        result.Should().NotBeNull();
        result.Should().BeEquivalentTo(expectedUser);
        result.BankAccounts.Should().NotBeNull().And.HaveCount(1);
    }
    #endregion

    #region UsernameExistAsync Tests
    [Fact]
    public async Task UsernameExistAsync_ShouldReturnTrue_WhenUserExists()
    {
        // Arrange
        var userName = "exists";
        var users = new List<AppUser> { new AppUser { UserName = userName } };
        A.CallTo(() => _userManager.Users).Returns(new TestAsyncEnumerable<AppUser>(users));

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper, _validator);

        // Act
        var exists = await service.UsernameExistAsync(userName);

        // Assert
        exists.Should().BeTrue();
    }
    #endregion

    #region AddClientAsync Tests

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

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper, _validator);

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

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper, _validator);

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

        var service = new UserApplicationService(_unitOfWork, _userManager, _mapper, _validator);

        // Act
        var result = await service.AddClientAsync(model);

        // Assert
        result.Should().BeNull();
    }
    #endregion

}
