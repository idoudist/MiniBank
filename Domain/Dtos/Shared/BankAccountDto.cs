namespace Domain.Dtos.Shared;

public class BankAccountDto
{
    public string CurrentBalance { get; set; }
    public AppUser AppUser { get; set; }
    public int AppUserId { get; set; }
}
