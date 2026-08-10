using System.ComponentModel.DataAnnotations;

namespace FirstCoreApp.Models
{
    public class User
    {
        [Key]
        public int id { get; set; }

        public string Username { get; set; } = string.Empty;

        public string Email { get; set; } = null!;

        public string Password {  get; set; } = null;
    }
}
