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

    }
}