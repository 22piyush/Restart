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
        public ViewResult AddStudent(Student student)
        {
            return View();
        }

    }
}