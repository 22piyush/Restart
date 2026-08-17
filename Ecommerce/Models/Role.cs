namespace Ecommerce.Models
{
    public enum RoleType
    {
        User = 1,
        Admin = 2,
        SuperAdmin = 3
    }

    public class Role
    {
        public int RoleId { get; set; }

        public RoleType RoleName { get; set; }
    }
}