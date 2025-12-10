using Infrastructure.Common;
using Infrastructure.Persistence.Context;

namespace Web.Extensions;

public static class InfrastructureServiceExtension
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration config)
    {
        /* configure db context*/
        services.RegisterDbConnection(config);
        return services;
    }

    private static void RegisterDbConnection(this IServiceCollection services, IConfiguration config)
    {
        /* configure db context (normal flow)*/
        services.AddDbContext<DataContext>(options =>
        {
            options.UseSqlite(config.GetConnectionString("DefaultConnection")).
            // extra line for logging generated sql commands
            LogTo(Console.WriteLine, LogLevel.Information);
        });
        /* add unit of work */
        services.AddScoped<IUnitOfWork, UnitOfWork>();
    }
}
