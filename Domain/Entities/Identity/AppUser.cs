

namespace Domain.Entities.Identity;

public class AppUser : IdentityUser<int>
{
    public DateTime DateOfBirth { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime LastActive { get; set; } = DateTime.Now;
    public string Gender { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    /*one to many relationship */
    public ICollection<BankAccountEntity> BankAccounts { get; set; }
    // roles
    public ICollection<AppUserRole> UserRoles { get; set; }
}
