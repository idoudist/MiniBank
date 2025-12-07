using System.Text.Json;

namespace Infrastructure.SeedData;

public class Seed
{
    public static async Task SeedUsers(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager, IUnitOfWork unitOfWork)
    {
        // check if users exist
        if (await userManager.Users.AnyAsync())
        {
            // truncate transaction table before starting up
            unitOfWork.TransactionRepository.TruncateGroupTables();
            return;
        }
        // add roles
        var roles = new List<AppRole>
        {
            new AppRole{Name = "Admin"},
            new AppRole{Name = "Client"},
        };

        foreach (var role in roles)
        {
            await roleManager.CreateAsync(role);
        }
        // add Clients
        var userData = await System.IO.File.ReadAllTextAsync("SeedData/UserSeedData.json");
        var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
        foreach (var user in users)
        {
            user.UserName = user.UserName.ToLower();
            await userManager.CreateAsync(user, "Pa$$w0rd");
            await userManager.AddToRoleAsync(user, "Client");
        }

        // add admin
        var admin = new AppUser
        {
            UserName = "admin"
        };

        await userManager.CreateAsync(admin, "Pa$$w0rd");
        await userManager.AddToRolesAsync(admin, new[] { "Admin"});
    }
}
