using System;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace MVCDataAnnotation.Models
{
    public class User
    {
        [Display(Name = "User Name")]
        [Required(ErrorMessage = "User name field can't be left empty.")]
        [RegularExpression(@"^[A-Za-z\s]{3,}$", ErrorMessage = "Name can have alphabets & spaces with minimum size of 3.")]
        public string Name { get; set; }


        [DataType(DataType.Password)]
        [Required(ErrorMessage = "Password field can't be left empty.")]
        [RegularExpression(@"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$_-])(?=\S+$).{8,16}$",
            ErrorMessage = "Password format:\n- No spaces.\n- Minimum 1 numeric digit.\n- Minimum 1 uppercase & lowercase alphabet.\n- Minimum 1 special character: -, _, @, #, $.\n- Length must be between 8 and 16 characters.")]
        public string Password { get; set; }


        [DataType(DataType.Password)]
        [Display(Name = "Confirm Password")]
        [Required(ErrorMessage = "Confirm password field can't be left empty.")]
        public string ConfirmPassword { get; set; }


        [DataType(DataType.Date)]
        [Display(Name = "Date of Birth")]
        [Required(ErrorMessage = "Date of birth field can't be left empty.")]
        [Remote("IsValidDate", "User", ErrorMessage = "You should attain 19 years of age to register.")]
        public DateTime DOB { get; set; }


        [Display(Name = "Mobile No")]
        [DataType(DataType.PhoneNumber)]
        [Required(ErrorMessage = "Mobile No. field can't be left empty.")]
        [RegularExpression(@"^[6-9]\d{9}$", ErrorMessage = "Mobile No. should start with 6, 7, 8, or 9 and must contain exactly 10 digits.")]
        public string Mobile { get; set; }


        [Display(Name = "Email Id")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Please enter a valid email address.")]
        public string Email { get; set; }


        [Display(Name = "User Address")]
        [DataType(DataType.MultilineText)]
        public string Address { get; set; }
    }
}