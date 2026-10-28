using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Session_21.Controllers
{
    public class CookiesController : Controller
    {
        // GET: Cookies
        public ActionResult Index(int? id, string name, double? price)
        {

            HttpCookie cookie = new HttpCookie("ProductCookie");
            cookie["Id"] = id.ToString();
            cookie["Name"] = name;
            cookie["Price"] = price.ToString(); ;
            cookie.Expires = DateTime.Now.AddDays(3);
            Response.Cookies.Add(cookie);

            return RedirectToAction("Index1");

        }

        public ViewResult Index1()
        {
            return View();
        }


    }
}