
using MVCWithADO.Models;
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

        // Display all students
        public ViewResult DisplayStudent()
        {
            List<Student> students = dal.SelectStudent(null, null);
            return View(students);
        }

        // Display single student
        public ViewResult DisplayStudentOne(int Sid)
        {
            Student student = dal.SelectStudent(Sid, null).SingleOrDefault();
            return View(student);
        }

        [HttpGet]
        public ViewResult AddStudent()
        {
            return View();
        }

        [HttpPost]
        public ViewResult AddStudent(Student student , HttpPostedFileBase seletedFile)
        {
            return View();
        }
    }
}
