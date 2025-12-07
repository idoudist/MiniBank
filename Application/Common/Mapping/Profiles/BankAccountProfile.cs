namespace Application.Common.Mapping.Profiles;

public class BankAccountProfile : Profile
{
    public BankAccountProfile()
    {
        CreateMap<BankAccountEntity, BankAccountDto>().ReverseMap();
        CreateMap<BankAccountCreationRequest, BankAccountEntity>().ReverseMap();
    }
}
