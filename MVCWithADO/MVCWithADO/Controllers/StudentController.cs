using MVCWithADO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCWithADO.Controllers
{
    public class StudentController : Controller
    {
        StudentDal dal;

        public StudentController()
        {
            dal = new StudentDal();
        }

        public ViewResult DisplayStudents()
        {
            List<Student> students = dal.SelectStudent(null, null);
            return View(students);
        }

        public ViewResult DisplayStudent(int Sid)
        {
            List<Student> student = dal.SelectStudent(Sid, null); // no .Single()
            return View(student);
        }

        [HttpGet]
        public ViewResult AddStudent()
        {
            return View();
        }

        [HttpPost]
        public ActionResult AddStudent(Student student)
        {
            dal.InsertStudent(student);

            return RedirectToAction("DisplayStudents");
        }


        [HttpGet]
        public ViewResult EditStudent(int Sid)
        {
            List<Student> students = dal.SelectStudent(Sid, null);

            Student student = students[0];

            return View(student);
        }

        [HttpPost]
        public ActionResult EditStudent(Student student)
        {
            dal.UpdateStudent(student);

            return RedirectToAction("DisplayStudents");
        }


        [HttpGet]
        public ActionResult DeleteStudent(int Sid)
        {
            dal.DeleteStudent(Sid);

            return RedirectToAction("DisplayStudents");
        }

    }
}