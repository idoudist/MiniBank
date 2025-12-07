namespace Application.Users.Dtos;

public class UserDto
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Token { get; set; }
    public string Gender { get; set; }
    public ICollection<BankAccountDto> BankAccounts { get; set; }
}
