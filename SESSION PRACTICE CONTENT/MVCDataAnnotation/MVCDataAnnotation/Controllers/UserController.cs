using System;
using System.Web.Mvc;
using MVCDataAnnotation.Models;

namespace MVCDataAnnotation.Controllers
{
    public class UserController : Controller
    {
        // GET: User/AddUser
        public ActionResult AddUser()
        {
            return View();
        }

        // POST: User/AddUser
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AddUser(User user)
        {
            if (ModelState.IsValid)
            {
                ViewBag.Message = "User registered successfully!";

                return View(user);
            }

            return View(user);
        }

        // Remote Validation for DOB
        public JsonResult IsValidDate(DateTime DOB)
        {
            DateTime today = DateTime.Today;

            int age = today.Year - DOB.Year;

            if (DOB.Date > today.AddYears(-age))
            {
                age--;
            }

            if (age >= 19)
            {
                return Json(true, JsonRequestBehavior.AllowGet);
            }

            return Json(
                "You should attain 19 years of age to register.",
                JsonRequestBehavior.AllowGet
            );
        }
    }
}