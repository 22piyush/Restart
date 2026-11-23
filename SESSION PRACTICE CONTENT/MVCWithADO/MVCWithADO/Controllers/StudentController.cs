using MVCWithADO.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCWithADO.Controllers
{
    public class StudentController : Controller
    {
        private const int MaxPhotoSize = 5 * 1024 * 1024;
        private static readonly string[] AllowedPhotoExtensions = { ".jpg", ".jpeg", ".png", ".gif" };
        private readonly StudentDal dal;

        public StudentController()
        {
            dal = new StudentDal();
        }

        public ActionResult DisplayStudent()
        {
            return View(dal.SelectStudent(null, true));
        }

        public ActionResult DisplayStudentOne(int sid)
        {
            Student student = dal.SelectStudent(sid, true).SingleOrDefault();

            if (student == null)
            {
                return HttpNotFound();
            }

            return View(student);
        }

        [HttpGet]
        public ActionResult AddStudent()
        {
            return View(new Student());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult AddStudent(Student student, HttpPostedFileBase selectedFile)
        {
            ValidatePhoto(selectedFile);

            if (!ModelState.IsValid)
            {
                return View(student);
            }

            string photoName = null;

            try
            {
                photoName = SavePhoto(selectedFile);
                student.Photo = photoName;

                if (!dal.InsertStudent(student))
                {
                    DeletePhoto(photoName);
                    ModelState.AddModelError("", "The student could not be added.");
                    return View(student);
                }

                return RedirectToAction("DisplayStudent");
            }
            catch (Exception ex)
            {
                DeletePhoto(photoName);
                ModelState.AddModelError("", "Unable to add the student: " + ex.GetBaseException().Message);
                return View(student);
            }
        }

        [HttpGet]
        public ActionResult EditStudent(int sid)
        {
            Student student = dal.SelectStudent(sid, true).SingleOrDefault();

            if (student == null)
            {
                return HttpNotFound();
            }

            return View(student);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult EditStudent(Student student, HttpPostedFileBase selectedFile)
        {
            ValidatePhoto(selectedFile);

            if (!ModelState.IsValid)
            {
                return View(student);
            }

            string oldPhoto = dal.SelectStudent(student.Sid, true)
                .Select(s => s.Photo)
                .SingleOrDefault();
            string newPhoto = null;

            try
            {
                newPhoto = SavePhoto(selectedFile);
                student.Photo = newPhoto ?? oldPhoto;

                if (!dal.UpdateStudent(student))
                {
                    DeletePhoto(newPhoto);
                    ModelState.AddModelError("", "The student could not be updated.");
                    student.Photo = oldPhoto;
                    return View(student);
                }

                if (!string.IsNullOrEmpty(newPhoto) && !string.Equals(oldPhoto, newPhoto, StringComparison.OrdinalIgnoreCase))
                {
                    DeletePhoto(oldPhoto);
                }

                return RedirectToAction("DisplayStudent");
            }
            catch (Exception)
            {
                DeletePhoto(newPhoto);
                student.Photo = oldPhoto;
                ModelState.AddModelError("", "An error occurred while updating the student.");
                return View(student);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteStudent(int sid)
        {
            try
            {
                if (!dal.DeleteStudent(sid))
                {
                    TempData["Message"] = "The student was not found or was already deleted.";
                }
            }
            catch (Exception)
            {
                TempData["Message"] = "An error occurred while deleting the student.";
            }

            return RedirectToAction("DisplayStudent");
        }

        private void ValidatePhoto(HttpPostedFileBase selectedFile)
        {
            if (selectedFile == null || selectedFile.ContentLength == 0)
            {
                return;
            }

            string extension = Path.GetExtension(selectedFile.FileName);

            if (!AllowedPhotoExtensions.Contains(extension, StringComparer.OrdinalIgnoreCase))
            {
                ModelState.AddModelError("selectedFile", "Only JPG, JPEG, PNG, and GIF files are allowed.");
            }

            if (selectedFile.ContentLength > MaxPhotoSize)
            {
                ModelState.AddModelError("selectedFile", "The photo cannot be larger than 5 MB.");
            }
        }

        private string SavePhoto(HttpPostedFileBase selectedFile)
        {
            if (selectedFile == null || selectedFile.ContentLength == 0)
            {
                return null;
            }

            string uploadFolder = Server.MapPath("~/Uploads/");
            Directory.CreateDirectory(uploadFolder);

            string extension = Path.GetExtension(selectedFile.FileName).ToLowerInvariant();
            string fileName = Guid.NewGuid().ToString("N") + extension;
            selectedFile.SaveAs(Path.Combine(uploadFolder, fileName));
            return fileName;
        }

        private void DeletePhoto(string photoName)
        {
            if (string.IsNullOrWhiteSpace(photoName))
            {
                return;
            }

            string uploadFolder = Server.MapPath("~/Uploads/");
            string photoPath = Path.Combine(uploadFolder, Path.GetFileName(photoName));

            if (System.IO.File.Exists(photoPath))
            {
                System.IO.File.Delete(photoPath);
            }
        }
    }
}