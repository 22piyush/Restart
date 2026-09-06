using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MVCWithADO.Models
{
    public class Student
    {
        [Display (Name = "Student ID")]
        public int Sid { get; set; }
        public string Name { get; set; }
        public double Fees { get; set; }
        public string Photo { get; set; }

        public bool Status { get; set; }

    }
}