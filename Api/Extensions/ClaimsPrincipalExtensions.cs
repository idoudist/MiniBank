using System.Security.Claims;

namespace Api.Extensions;

public static class ClaimsPrincipalExtensions
{
    public static string GetUserName(this ClaimsPrincipal user)
    {
        // get authenticated user username from the token
        return user.FindFirst(ClaimTypes.Name)?.Value;
    }

    public static int GetUserId(this ClaimsPrincipal user)
    {
        // get authenticated user id from the token
        return int.Parse(user.FindFirst(ClaimTypes.NameIdentifier)?.Value);
    }
}
