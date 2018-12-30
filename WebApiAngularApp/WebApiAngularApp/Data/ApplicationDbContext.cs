using System.Data.Entity;
using WebApiAngularApp.Models;

namespace WebApiAngularApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext() : base("ProductContext") { }

        public DbSet<Product> Products { get; set; }
    }
}