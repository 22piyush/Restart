using System;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication2
{
    public partial class ControlCreation : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

                Button btn = new Button();
                btn.ID = "Button3";
                btn.Text = "Click Me";

                form1.Controls.Add(btn);
        }

        protected void Button1_Click(object sender, EventArgs e)
        {

        }
    }
}