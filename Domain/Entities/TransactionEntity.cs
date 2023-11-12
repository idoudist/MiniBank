namespace Domain.Entities;

public class TransactionEntity : BaseEntity
{
    public float Debit { get; set; }
    public float Credit { get; set; }
    public DateTime Date { get; set; }
    public TransactionType TransactionType { get; set; }
    public virtual BankAccountEntity BankAccount { get; set; }
    public int BankAccountId { get; set; }
}

