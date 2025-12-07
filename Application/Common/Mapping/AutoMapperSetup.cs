namespace Application.Common.Mapping;

public static class AutoMapperSetup
{
    public static IMapper CreateMapper()
    {
        var config = new MapperConfiguration(cfg =>
        {
            cfg.AddMaps(AppDomain.CurrentDomain.GetAssemblies());
        });

        return config.CreateMapper();
    }
}
