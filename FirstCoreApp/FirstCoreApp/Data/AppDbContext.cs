using FirstCoreApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstCoreApp.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {

       public DbSet<User> Users { get; set; }
        
       

    }
}
