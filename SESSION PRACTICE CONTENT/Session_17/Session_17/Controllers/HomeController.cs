using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Session_17.Controllers
{
    public class HomeController : Controller
    {
        public string Show()
        {
            return "Hello From Show.";
        }

        // GET: Test
        public string Index()
        {
            return "Hello From Index.";
        }

    }
}