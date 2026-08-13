using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCProject1.Controllers
{
    public class DemoController : Controller
    {
        public string Index()
        {
            return "Index";
        }

        public string Show()
        {
            return "Show";
        }
    }
}