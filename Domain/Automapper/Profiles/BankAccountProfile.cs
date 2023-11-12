namespace Domain.Automapper.Profiles;

public class BankAccountProfile : Profile
{
    public BankAccountProfile()
    {
        CreateMap<BankAccountEntity, BankAccountDto>().ReverseMap();
    }
}
