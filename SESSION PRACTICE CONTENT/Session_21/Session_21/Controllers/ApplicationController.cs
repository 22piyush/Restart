using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Session_21.Controllers
{
    public class ApplicationController : Controller
    {
        // GET: Application
        public ActionResult Index()
        {
            return View();
        }

        public ViewResult Index11(int? id, string name, double? price)
        {
            HttpContext.Application["Id"] = id;
            HttpContext.Application["Name"] = name;
            HttpContext.Application["Price"] = price;

            return View();
        }
        


    }

}