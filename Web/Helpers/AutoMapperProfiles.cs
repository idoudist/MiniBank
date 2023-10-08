using AutoMapper;

namespace Web.Helpers;

public class AutoMapperProfiles : Profile
{
    public AutoMapperProfiles()
    {
        CreateMap<TransactionEntity, TransactionDto>().ReverseMap();
    }
}
