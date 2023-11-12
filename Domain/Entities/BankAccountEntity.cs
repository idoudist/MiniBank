namespace Domain.Entities;

public class BankAccountEntity : BaseEntity
{
    public string CurrentBalance { get; set; }
    public AppUser AppUser { get; set; }
    public int AppUserId { get; set; }

    /*one to many relations*/
    public ICollection<TransactionEntity> Transactions { get; set; }
}
