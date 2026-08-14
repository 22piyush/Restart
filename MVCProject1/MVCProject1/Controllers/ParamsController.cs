using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCProject1.Controllers
{
    public class ParamsController : Controller
    {

        public string Index1(int id)
        {
            return "Params: "+ id;
        }

        public string Index2(int id = 0)
        {
            return "Params: " + id;
        }

        public string Index3(int? id)
        {
            return "Params: " + id;
        }

        [ActionName("SayHello1")]
        public string SayHello()
        {
            return "Hello SyaHello1";
        }

        [ActionName("SayHello2")]
        public string SayHello(string Name)
        {
            return "Hello SyaHello2";
        }

        [NonAction]
        public string Display()
        {
            return "Hello Display";
        }


    }
}