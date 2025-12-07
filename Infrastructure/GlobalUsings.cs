// .Net
global using System.Text.Json;
// Microsoft dependencies
global using Microsoft.AspNetCore.Identity;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
// Libraries
global using AutoMapper;
global using AutoMapper.QueryableExtensions;
// Projects
global using Domain.Entities;
global using Domain.Entities.Identity;
global using Domain.Helpers.Pagination;
global using Application.Bank.Interfaces;
global using Application.Common.Interfaces;
global using Application.Transactions.Interfaces;
global using Application.Users.Interfaces;
// Inner Project
global using Infrastructure.Persistence.Repositories;
global using Infrastructure.Persistence.Context;
