using Microsoft.AspNetCore.Identity;

namespace Domain.Entities.Identity;

public class AppRole : IdentityRole<int>
{
    [JsonIgnore]
    public virtual ICollection<AppUserRole> UserRoles { get; set; }
}
