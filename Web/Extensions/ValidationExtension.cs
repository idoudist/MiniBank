using Application.Dtos.Requests;
using FluentValidation;

namespace Web.Extensions;

public static class ValidationExtension
{
    public static IServiceCollection AddFluentValidations(this IServiceCollection services, IConfiguration config)
    {
        /* User Dtos */
        services.AddValidatorsFromAssemblyContaining<RegisterDto>();

        return services;
    }
}
