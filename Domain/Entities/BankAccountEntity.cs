namespace Domain.Entities;

public class BankAccountEntity : BaseEntity
{
    public string Name { get; set; }
    public string CurrentBalance { get; set; }
    public bool IsMain { get; set; }
    public bool IsLocked { get; set; }

    /* forign keys */
    [JsonIgnore]
    public virtual AppUser AppUser { get; set; }
    public int AppUserId { get; set; }

    /*one to many relations*/
    [JsonIgnore]
    public virtual ICollection<TransactionEntity> Transactions { get; set; }
}
