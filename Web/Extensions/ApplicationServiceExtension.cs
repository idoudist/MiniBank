using Infrastructure.Common;
using Infrastructure.Identity.Services;
using Infrastructure.Persistence.Context;

namespace Web.Extensions;

public static class ApplicationServiceExtension
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        /* configure automapper */
        services.AddSingleton(AutoMapperSetup.CreateMapper());
        /* add service Filter */
        services.AddScoped<LogUserActivity>();
        /* add services */
        services.AddScoped<IUserIdentityService, UserIdentityService>();
        services.AddScoped<ITransactionApplicationService, TransactionApplicationService>();
        services.AddScoped<IBankAccountApplicationService, BankAccountApplicationService>();
        services.AddScoped<ITokenService, TokenService>();
        

        return services;
    }
}
