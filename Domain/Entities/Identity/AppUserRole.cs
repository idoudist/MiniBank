using Microsoft.AspNetCore.Identity;

namespace Domain.Entities.Identity;

public class AppUserRole : IdentityUserRole<int>
{
    [JsonIgnore]
    public virtual AppUser User { get; set; }
    [JsonIgnore]
    public virtual AppRole Role { get; set; }
}
