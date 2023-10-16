using System.Text.Json;

namespace Web.Extensions;

public static class HttpExtensions
{
    public static void AddPaginationHeader(this HttpResponse response,
        int currentPage, int itemsPerPage, int totalItems, int totalPages)
    {
        var paginationHeader = new PaginationHeader(currentPage, itemsPerPage, totalItems, totalPages);
        // return object in camelCase
        var options = new JsonSerializerOptions
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };
        // add custom header
        response.Headers.Add("Pagination", JsonSerializer.Serialize(paginationHeader, options));
        // expose custom header (must be spelled exactly the same)
        response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
    }
}
