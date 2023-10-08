using Microsoft.EntityFrameworkCore;
using Web.Entities;

namespace Web.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<BankAccountEntity> BankAccounts { get; set; }
    public DbSet<TransactionEntity> Transactions { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        
    }
}
