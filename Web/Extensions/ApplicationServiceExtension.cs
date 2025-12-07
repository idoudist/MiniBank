using Infrastructure.Common;
using Infrastructure.Identity.Services;

namespace Web.Extensions;

public static class ApplicationServiceExtension
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        /* configure db context*/
        services.RegisterDbConnection(config);
        /* configure automapper */
        services.AddAutoMapper(typeof(AutoMapperMappings).Assembly);
        /* add service Filter */
        services.AddScoped<LogUserActivity>();
        /* add services */
        services.AddScoped<IUserIdentityService, UserIdentityService>();
        services.AddScoped<ITransactionApplicationService, TransactionApplicationService>();
        services.AddScoped<IBankAccountApplicationService, BankAccountApplicationService>();
        services.AddScoped<ITokenService, TokenService>();
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
