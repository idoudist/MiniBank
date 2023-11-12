using Domain.Entities.Identity;

namespace Application.Utils;

public interface ITokenService
{
    Task<string> CreateToken(AppUser user);
}
