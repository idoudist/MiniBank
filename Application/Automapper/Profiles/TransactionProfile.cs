namespace Application.Automapper.Profiles;

public class TransactionProfile : Profile
{
    public TransactionProfile()
    {
        CreateMap<TransactionEntity, TransactionDto>()
            .ForMember(dest => dest.Amount, opt => opt
            .MapFrom(src => CalculateAmount(src)));
    }

    //must be static to avoid memory leak
    public static float CalculateAmount(TransactionEntity source)
    {
        if (source.TransactionType == TransactionType.Withdrowl)
        {
            return source.Debit;
        }
        else
        {
            return source.Credit;
        }
    }
}
