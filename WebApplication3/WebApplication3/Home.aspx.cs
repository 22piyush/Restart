using System;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication3
{
    public partial class Home : System.Web.UI.Page
    {
        string connectionString =
            @"Data Source=LAPTOP-VDRGH1AV\SQLEXPRESS;
              Initial Catalog=WebFormDB;
              Integrated Security=True";

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                LoadUsers();
            }
        }

        private void LoadUsers()
        {
            SqlConnection con = null;

            try
            {
                con = new SqlConnection(connectionString);

                string query = @"SELECT
                                    UserName,
                                    Password,
                                    DateOfBirth,
                                    PhoneNumber,
                                    Email,
                                    Address
                                 FROM UserInfo";

                SqlDataAdapter da = new SqlDataAdapter(query, con);

                DataTable dt = new DataTable();

                da.Fill(dt);

                gvUsers.DataSource = dt;

                gvUsers.DataBind();
            }
            catch (Exception ex)
            {
                Response.Write(ex.Message);
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }
            }
        }
    }
}