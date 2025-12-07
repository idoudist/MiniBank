namespace Application.Dtos.Requests;

public class BankAccountCreationRequest
{
    [Required]
    public string Name { get; set; }
    [Required]
    public int AppUserId { get; set; }
    [Required]
    public bool IsMain { get; set; }
    [Required]
    public bool IsLocked { get; set; }
}
