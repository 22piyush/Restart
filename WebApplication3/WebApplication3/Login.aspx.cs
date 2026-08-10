using System;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;
using System.Web.UI;

namespace WebApplication3
{
	public partial class Login : System.Web.UI.Page
	{

        private string HashPassword(string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

                StringBuilder builder = new StringBuilder();

                foreach (byte b in bytes)
                {
                    builder.Append(b.ToString("x2"));
                }

                return builder.ToString();
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                textEmail.Focus();
            }
        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            string hashedPassword = HashPassword(txtPwd.Text);

            SqlConnection con = null;

            try
            {
                con = new SqlConnection("Data Source=LAPTOP-VDRGH1AV\\SQLEXPRESS;Initial Catalog=WebFormDB;Integrated Security=True");

                string query = @"SELECT COUNT(*) 
                         FROM UserInfo
                         WHERE Email=@Email
                         AND Password=@Password";

                SqlCommand cmd = new SqlCommand(query, con);

                cmd.Parameters.AddWithValue("@Email", textEmail.Text);
                cmd.Parameters.AddWithValue("@Password", hashedPassword);

                con.Open();

                int count = Convert.ToInt32(cmd.ExecuteScalar());

                if (count > 0)
                {
                    ClientScript.RegisterStartupScript(
                        this.GetType(),
                        "Success",
                        "alert('Login Successful'); window.location='Home.aspx';",
                        true);
                }
                else
                {
                    ClientScript.RegisterStartupScript(
                        this.GetType(),
                        "Failed",
                        "alert('Invalid Email or Password');",
                        true);
                }
            }
            catch (Exception ex)
            {
                ClientScript.RegisterStartupScript(
                    this.GetType(),
                    "Error",
                    "alert('Error: " + ex.Message.Replace("'", "\\'") + "');",
                    true);
            }
            finally
            {
                if (con != null && con.State == System.Data.ConnectionState.Open)
                {
                    con.Close();
                }
            }
        }

        protected void btnReset_Click(object sender, EventArgs e)
        {
            textEmail.Text = "";
            txtPwd.Text = "";

            textEmail.Focus();
        }
        

    }
}