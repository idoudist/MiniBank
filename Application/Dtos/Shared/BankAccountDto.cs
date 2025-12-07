namespace Application.Dtos.Shared;

public class BankAccountDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public bool IsMain { get; set; }
    public bool IsLocked { get; set; }
    public double CurrentBalance { get; set; }
    public AppUser AppUser { get; set; }
    public int AppUserId { get; set; }
}
