using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Session_26_MVC_UI_Designing.Controllers
{
    public class EmpController : Controller
    {
        [HttpGet]
        public ViewResult AddEmp()
        {
            return View();
        }

        [HttpPost]
        public ViewResult AddEmp(int? id, string name, string job, double? salary)
        {
            ViewData["Id"] = id;
            ViewData["Name"] = name;
            ViewData["Job"] = job;
            ViewData["Salary"] = salary;
            return View("DisplayEmp1");
        }

    }
}