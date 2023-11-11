namespace Api.Controllers;

[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    public UserController(IUserService userService)
    {
        _userService = userService;
    }

        public async Task<ActionResult<AppUser>> GetUser(int id)
    {
        return await _userService.GetUserByIdAsync(id);
    }
}
