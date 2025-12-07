namespace Application.Dtos.Requests;

public class TransactionParams : PaginationParams
{
    /// <summary>
    /// Bank Account Id
    /// </summary>
    public int AccountId { get; set; }
}
