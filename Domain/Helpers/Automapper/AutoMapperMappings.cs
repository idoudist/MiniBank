using Domain.Helpers.Automapper.Profiles;

namespace Domain.Helpers.Automapper;

public static class AutoMapperMappings
{
    public static void ConfigureMappings(this IMapperConfigurationExpression config)    
    {
        config.AddProfile<TransactionProfile>();
    }

}
