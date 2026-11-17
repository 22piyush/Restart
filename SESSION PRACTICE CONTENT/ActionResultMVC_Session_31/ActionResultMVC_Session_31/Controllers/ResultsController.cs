using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ActionResultMVC_Session_31.Controllers
{
    public class ResultsController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public FileResult DownloadPDF()
        {
            return File("~/Downloads/sample.pdf", "application/pdf");
        }

        public FileResult DownloadWord()
        {
            return File("~/Downloads/sample.doc", "application/msword");
        }
    }
}