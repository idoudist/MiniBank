namespace Domain.Dtos.Shared;

public class UserDto
{
    public string Username { get; set; }
    public string Token { get; set; }
    public string Gender { get; set; }
    public ICollection<BankAccountDto> BankAccounts { get; set; }
}
