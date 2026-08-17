
using System.Collections.Generic;
using System.Web.Mvc;

namespace MVCNew.Controllers
{
    public class RazorController : Controller
    {
        public ActionResult Index()
        {
            List<string> colors = new List<string> { };
            return View();
        }
    }
}