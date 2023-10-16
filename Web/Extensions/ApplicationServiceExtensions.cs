using Microsoft.EntityFrameworkCore;
using Web.Data;
using Web.Helpers.Automapper;
using Web.Services;

namespace Web.Extensions;

public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        /* configure db context*/
        services.RegisterDbConnection(config);
        /* configure automapper */
        services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
        /* add services */
        services.AddScoped<ITransactionService, TransactionService>();
        /* add unit of work */
        services.AddScoped<IUnitOfWork, UnitOfWork>();

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
        

    }
}
