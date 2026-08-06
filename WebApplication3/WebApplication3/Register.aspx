<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="WebApplication3.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Registration Form</title>
</head>
<body style="margin:0; padding:0; background-color:#f2f2f2; font-family:Arial, Helvetica, sans-serif;">

    <form id="form1" runat="server">

        <div style="width:420px; margin:50px auto; background-color:white; padding:25px; border-radius:10px; box-shadow:0px 0px 10px gray;">

            <h1 style="background-color:yellow; color:red; text-align:center; padding:10px; margin-top:0; border-radius:5px;">
                Registration Form
            </h1>

            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;">User Name</label><br />
                <asp:TextBox ID="txtName" runat="server"
                    style="width:95%; padding:8px; margin-top:5px;"></asp:TextBox>
            </div>

            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;">Password</label><br />
                <asp:TextBox ID="txtPwd" runat="server" TextMode="Password"
                     style="width:95%; padding:8px; margin-top:5px;"></asp:TextBox>
            </div>

            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;">Date of Birth</label><br />
                <asp:TextBox ID="txtDob" runat="server" TextMode="Date"
                    style="width:95%; padding:8px; margin-top:5px;"></asp:TextBox>
            </div>

            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;">Phone Number</label><br />
                <asp:TextBox ID="txtPhone" runat="server" TextMode="Phone"
                    style="width:95%; padding:8px; margin-top:5px;"></asp:TextBox>
            </div>

            <div style="margin-bottom:15px;">
                <label style="font-weight:bold;">Email</label><br />
                <asp:TextBox ID="textEmail" runat="server" TextMode="Email"
                    style="width:95%; padding:8px; margin-top:5px;"></asp:TextBox>
            </div>

            <div style="margin-bottom:20px;">
                <label style="font-weight:bold;">Address</label><br />
                <asp:TextBox ID="txtAddress" runat="server" TextMode="MultiLine" Rows="3"
                    style="width:95%; padding:8px; margin-top:5px;"></asp:TextBox>
            </div>

            <div style="text-align:center;">
                <asp:Button ID="btnRegister" runat="server"
                    Text="Register"
                    style="background-color:#28a745; color:white; border:none; padding:10px 25px; border-radius:5px; cursor:pointer; margin-right:10px;" OnClick="btnRegister_Click" />

                <asp:Button ID="btnReset" runat="server"
                    Text="Reset"
                    CausesValidation="false"
                    style="background-color:#dc3545; color:white; border:none; padding:10px 25px; border-radius:5px; cursor:pointer;" OnClick="btnReset_Click" />
            </div>

        </div>



    </form>

    <div style="margin-top:50px; padding:30px;">

    <table style="width:100%; border-collapse:collapse; text-align:center;">

        <tr style="background-color:#007ACC; color:white;">
            <th style="border:1px solid black; padding:10px;">User Name</th>
            <th style="border:1px solid black; padding:10px;">Password</th>
            <th style="border:1px solid black; padding:10px;">Date of Birth</th>
            <th style="border:1px solid black; padding:10px;">Phone Number</th>
            <th style="border:1px solid black; padding:10px;">Email</th>
            <th style="border:1px solid black; padding:10px;">Address</th>
        </tr>

        <tr>
            <td style="border:1px solid black; padding:10px;">Piyush</td>
            <td style="border:1px solid black; padding:10px;">******</td>
            <td style="border:1px solid black; padding:10px;">01-01-2000</td>
            <td style="border:1px solid black; padding:10px;">9876543210</td>
            <td style="border:1px solid black; padding:10px;">piyush@gmail.com</td>
            <td style="border:1px solid black; padding:10px;">Nagpur</td>
        </tr>

    </table>

</div>
 
</body>
</html>