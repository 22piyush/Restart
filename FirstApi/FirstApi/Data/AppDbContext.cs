using FirstApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace FirstApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }


        public DbSet<User> AccountUser { get; set; } = null!;
        public DbSet<Employee> Employees { get; set; } = null!;

    }
}
