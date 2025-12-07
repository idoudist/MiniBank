//.Net
global using System.Net;
global using System.Text.Json;
//Microsoft
global using Microsoft.AspNetCore.Http;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.Extensions.Hosting;
global using Microsoft.Extensions.Logging;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.AspNetCore.Authorization;
//Libraries
global using AutoMapper;
//Projects
global using Domain.Helpers.Pagination;
global using Domain.Entities.Identity;
global using Application.Dtos.Requests;
global using Application.Dtos.Responses;
global using Application.Dtos.Shared;
global using Application.Contracts.ApplicationServices;
global using Application.Utils;
global using Api.Extensions;
global using Api.Helpers;
global using Api.Errors;