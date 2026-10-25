using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Session_19_MVCActionResult.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ViewResult Register() 
        {
            return View();
        }

        public ViewResult Login()
        {
            return View();
        }

        public ViewResult ForgotPwd()
        {
            return View();
        }

        public ViewResult ResetPwd()
        {
            return View();
        }

        public ViewResult ResetPassword()
        {
            return View("~/Views/Home/ResetPwd.cshtml");
        }

        public ViewResult ForgotPassword()
        {
            return View("~/Views/Home/ForgotPwd.cshtml");
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