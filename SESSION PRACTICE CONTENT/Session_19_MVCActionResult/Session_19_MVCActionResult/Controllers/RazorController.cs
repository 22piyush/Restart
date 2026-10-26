using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Session_19_MVCActionResult.Controllers
{
    public class RazorController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}