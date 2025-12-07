using FluentValidation;

namespace Application.Validation;

public class RegisterDtoValidator : AbstractValidator<RegisterDto>
{
    public RegisterDtoValidator()
    {
        RuleFor(x => x.Username)
            .NotEmpty().WithMessage("Username is required.")
            .MinimumLength(3).WithMessage("Username must be at least 3 characters long.")
            .MaximumLength(20).WithMessage("Username must not exceed 20 characters.");
        RuleFor(x => x.Password)
            .NotEmpty().WithMessage("Password is required.")
            .MinimumLength(6).WithMessage("Password must be at least 6 characters.");
        RuleFor(x => x.Gender)
            .NotEmpty().WithMessage("Gender is required.")
            .Must(g => g == "Male" || g == "Female")
            .WithMessage("Gender must be Male or Female.");
        RuleFor(x => x.DateOfBirth)
            .NotEmpty().WithMessage("Date of birth is required.")
            .LessThan(DateTime.Today.AddYears(-18))
            .WithMessage("User must be at least 18 years old.");
        RuleFor(x => x.Country)
            .NotEmpty().WithMessage("Country is required.");
        RuleFor(x => x.City)
            .NotEmpty().WithMessage("City is required.");
    }
}
