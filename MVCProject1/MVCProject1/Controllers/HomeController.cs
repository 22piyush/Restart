using System.Web.Mvc;

namespace MVCProject1.Controllers
{
    public class HomeController : Controller
    {
        public string Index()
        {
            return "Home Index";
        }

        public string Show(int? id)
        {
            return "Home Show";
        }
    }
}