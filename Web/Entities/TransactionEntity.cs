using Web.Enums;

namespace Web.Entities;

public class Transaction : BaseEntity
{
    public float Debit { get; set; }
    public float Credit { get; set; }
    public DateTime Date { get; set; }
    public TransactionType TransactionType { get; set; }
}

