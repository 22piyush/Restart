using Ecommerce.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Controllers
{
    public class RoleController : Controller
    {
        private readonly EcommerceDataContext _context;

        public RoleController(EcommerceDataContext context)
        {
            _context = context;
        }
    }
}
