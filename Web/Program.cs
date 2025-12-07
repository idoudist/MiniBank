/*create builder*/

using Application.Common.Interfaces;

var builder = WebApplication.CreateBuilder(args);

/* Add services to the container. */

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddFluentValidations(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddCors();
// swagger
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "API v1"));
}
//0 exception handeling (custom)
app.UseMiddleware<ExceptionMiddleware>();
//1 redirect to https
app.UseHttpsRedirection();
//2 allow cors
app
    .UseCors(policy => policy
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowCredentials()
    .WithOrigins("http://localhost:4200", "https://localhost:4200"));
//3 authenticate
app.UseAuthentication();
//4 authorize
app.UseAuthorization();
//5 serve angular app on kestrel server(serve the static build in wwwroot)
app.UseDefaultFiles();
app.UseStaticFiles();
//6 defined endpoints
app.MapControllers();
//7 Map fallback Controller (link to the web app) 
app.MapFallbackToController("Index", "Fallback");
//8 Seed Data
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    // inject services (because we are seeding data before injecting dependencies)
    var context = services.GetRequiredService<DataContext>();
    var userManager = services.GetRequiredService<UserManager<AppUser>>();
    var roleManager = services.GetRequiredService<RoleManager<AppRole>>();
    var unitOfWork = services.GetRequiredService<IUnitOfWork>();
    await context.Database.MigrateAsync();
    await Seed.SeedUsers(userManager, roleManager, unitOfWork);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occurred during migration");
}

await app.RunAsync();