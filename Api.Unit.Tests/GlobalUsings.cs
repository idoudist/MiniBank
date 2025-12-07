//Application dependencies
global using Microsoft.AspNetCore.Identity;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Http;
global using System.Security.Claims;
global using AutoMapper;
//Unit testing
global using Xunit;
global using FakeItEasy;
global using FluentAssertions;
//tested library
global using Api.Controllers;
//project libraries
global using Domain.Entities.Identity;
global using Domain.Entities;
global using Application.Bank.Interfaces;
global using Application.Common.Interfaces;
global using Application.Users.Dtos;
global using Application.Users.Interfaces;
global using Application.Bank.Dtos;