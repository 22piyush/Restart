using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Session_21.Controllers
{
    public class SessionController : Controller
    {
        // GET: Session
        public RedirectToRouteResult Index(int? id, string name, double? price)
        {
            Session["Id"] = id.ToString();
            Session["Name"] = name;
            Session["Price"] = price.ToString(); ;

            return RedirectToAction("Index1");
        }


        public ViewResult Index1()
        {
            return View();
        }


    }
}
