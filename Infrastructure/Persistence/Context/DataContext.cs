namespace Infrastructure.Persistence.Context;

public class DataContext : IdentityDbContext<AppUser, AppRole, int, IdentityUserClaim<int>, AppUserRole,
        IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
{
    public DataContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<BankAccountEntity> BankAccounts { get; set; }
    public DbSet<TransactionEntity> Transactions { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        /*configure identity relations*/
        // configure relation user - userRole
        builder.Entity<AppUser>()
            .HasMany(u => u.UserRoles)
            .WithOne(ur => ur.User)
            .HasForeignKey(ur => ur.UserId)
            .IsRequired();
        builder.Entity<AppUser>()
            .HasMany(u => u.BankAccounts)
            .WithOne(ur => ur.AppUser)
            .HasForeignKey(ur => ur.AppUserId)
            .IsRequired();
        // configure relation roke - userRole
        builder.Entity<AppRole>()
            .HasMany(u => u.UserRoles)
            .WithOne(ur => ur.Role)
            .HasForeignKey(ur => ur.RoleId)
            .OnDelete(DeleteBehavior.Restrict);

        /*configure Transactions relations*/
        builder.Entity<TransactionEntity>()
            .HasOne(t => t.BankAccount)
            .WithMany(u => u.Transactions)
            .HasForeignKey(t => t.BankAccountId)
            .OnDelete(DeleteBehavior.Restrict);

    }
}
