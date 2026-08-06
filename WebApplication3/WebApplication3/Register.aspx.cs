using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace WebApplication3
{
    public partial class Register : System.Web.UI.Page
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
            if(!IsPostBack) txtName.Focus();

        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            string hashedPassword = HashPassword(txtPwd.Text);

            SqlConnection con = null;

            try
            {
                con = new SqlConnection("Data Source=LAPTOP-VDRGH1AV\\SQLEXPRESS;Initial Catalog=WebFormDB;Integrated Security=True");

                string query = @"INSERT INTO UserInfo
                        (UserName, Password, DateOfBirth, PhoneNumber, Email, Address)
                        VALUES
                        (@UserName, @Password, @DateOfBirth, @PhoneNumber, @Email, @Address)";

                SqlCommand cmd = new SqlCommand(query, con);

                cmd.Parameters.AddWithValue("@UserName", txtName.Text);
                cmd.Parameters.AddWithValue("@Password", hashedPassword);
                cmd.Parameters.AddWithValue("@DateOfBirth", txtDob.Text);
                cmd.Parameters.AddWithValue("@PhoneNumber", txtPhone.Text);
                cmd.Parameters.AddWithValue("@Email", textEmail.Text);
                cmd.Parameters.AddWithValue("@Address", txtAddress.Text);

                con.Open();

                int result = cmd.ExecuteNonQuery();

                if (result > 0)
                {
                    ClientScript.RegisterStartupScript(
                        this.GetType(),
                        "Success",
                        "alert('Registration Successful!'); window.location='Login.aspx';",
                        true);
                }
                else
                {
                    ClientScript.RegisterStartupScript(
                        this.GetType(),
                        "Failed",
                        "alert('Insert Operation Failed.');",
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

            txtName.Text = "";
            txtPwd.Text = "";
            txtDob.Text = "";
            txtPhone.Text = "";
            textEmail.Text = "";
            txtAddress.Text = "";

        }

    }
}