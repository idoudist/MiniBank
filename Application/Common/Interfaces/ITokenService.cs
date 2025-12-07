namespace Application.Common.Interfaces;

public interface ITokenService
{
    Task<string> CreateToken(AppUser user);
}
