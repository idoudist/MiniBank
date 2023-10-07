using Web.Enums;

namespace Web.Dtos;

public class TransactionDto
{
    public int Id { get; set; }
    public float Amount { get; set; }
    public  TransactionType TransactionType { get; set; }
}
