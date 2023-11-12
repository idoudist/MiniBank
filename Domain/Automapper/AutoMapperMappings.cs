namespace Domain.Automapper;

public class AutoMapperMappings
{
    public AutoMapperMappings()
    {
        var configuration = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<TransactionProfile>();
            cfg.AddProfile<UserProfile>();
            cfg.AddProfile<BankAccountProfile>();
        });
    }
}
