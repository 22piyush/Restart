using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCNew.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }


        public ActionResult Login()
        {
            return View();
        }

        public ActionResult ForgotPassword()
        {
            return View("ForgotPwd");
        }

        public ActionResult ResettPassword()
        {
            return View("~/Views/Home/ResetPwd.cshtml");
        }

        public ViewResult Contact()
        {
            return View();
        }

        public ViewResult Mission()
        {
            return View("~/Views/Test/Mission.cshtml");
        }

    }
}