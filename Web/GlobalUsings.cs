// Microsoft libraries
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Authentication.JwtBearer;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.OpenApi.Models;
global using Microsoft.IdentityModel.Tokens;
global using System.Text;
// Projects
global using Domain.Entities.Identity;
global using Application.Bank.Interfaces;
global using Application.Common.Interfaces;
global using Application.Common.Mapping;
global using Application.Transactions.Interfaces;
global using Application.Users.Interfaces;
global using Application.Bank.Services;
global using Application.Transactions.Services;
global using Api.Middleware;
global using Api.Helpers;
// Inner Project
global using Web.Extensions;

