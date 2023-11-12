using Domain.Helpers.Automapper.Profiles;

namespace Domain.Helpers.Automapper;

public class AutoMapperMappings
{
    public AutoMapperMappings()    
    {
        var configuration = new MapperConfiguration(cfg => {
            cfg.AddProfile<TransactionProfile>();
        });
    }
}
