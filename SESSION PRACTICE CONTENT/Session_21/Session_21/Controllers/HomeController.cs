using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Session_21.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(int? id, string name, double? price)
        {
            ViewData["Id"] = id;
            ViewData["Name"] = name;
            ViewData["Price"] = price;

            return View();
        }


        public ActionResult Index2(int? id, string name, double? price)
        {
            ViewBag.Id = id;
            ViewBag.Name = name;
            ViewBag.Price = price;

            return View();
        }


        public ViewResult Display()
        {
            List<string> Colors = new List<string>() { "Red", "Blue", "Pink", "Black", "White", "Green", "Brown", "Purple" };
            ViewData["Colors"] = Colors;
            return View();
        }


        public RedirectToRouteResult Index3(int? id, string name, double? price)
        {
            TempData["Id"] = id;
            TempData["Name"] = name;
            TempData["Price"] = price;

            return RedirectToAction("Index4");
        }

        public ViewResult Index4()
        {
            return View();
        }

    }
}