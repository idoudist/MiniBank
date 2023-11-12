using Application.Utils;
using Domain.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Api.Controllers;

public class AdminController : BaseApiController
{
    private readonly UserManager<AppUser> _userManager;
    private readonly IUnitOfWork _unitOfWork;

    public AdminController(UserManager<AppUser> userManager, IUnitOfWork unitOfWork)
    {
        _userManager = userManager;
        _unitOfWork = unitOfWork;
    }
}
