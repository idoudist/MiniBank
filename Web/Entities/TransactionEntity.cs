using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Web.Entities;

public class TransactionEntity : BaseEntity
{
    public float Debit { get; set; }
    public float Credit { get; set; }
    [DataType(DataType.DateTime)]
    [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
    public DateTime Date { get; set; }
    public TransactionType TransactionType { get; set; }
}

