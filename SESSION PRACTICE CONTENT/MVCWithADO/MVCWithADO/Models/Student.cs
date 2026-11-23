using System.ComponentModel.DataAnnotations;

namespace MVCWithADO.Models
{
    public class Student
    {
        [Display(Name = "Student Id")]
        public int Sid { get; set; }

        [Required(ErrorMessage = "Please enter the student name.")]
        [StringLength(50, ErrorMessage = "The name cannot be longer than 50 characters.")]
        [Display(Name = "Student Name")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Please enter the class.")]
        [Range(1, int.MaxValue, ErrorMessage = "Class must be greater than zero.")]
        [Display(Name = "Class")]
        public int? Class { get; set; }

        [Required(ErrorMessage = "Please enter the fees.")]
        [Range(typeof(decimal), "0", "99999999.99", ErrorMessage = "Fees must be between 0 and 99,999,999.99.")]
        [Display(Name = "Fees")]
        [DataType(DataType.Currency)]
        public decimal? Fees { get; set; }

        [StringLength(100)]
        [Display(Name = "Photo")]
        public string Photo { get; set; }
    }
}