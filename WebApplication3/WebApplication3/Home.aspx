<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="WebApplication3.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Home</title>
</head>
<body>

    <form id="form1" runat="server">

        <div style="width:95%; margin:auto;">

            <h1 style="text-align:center;">Registered Users</h1>

            <asp:GridView
                ID="gvUsers"
                runat="server"
                AutoGenerateColumns="False"
                Width="100%"
                BorderWidth="1"
                GridLines="Both"
                CellPadding="8">

                <Columns>

                    <asp:BoundField DataField="UserName" HeaderText="User Name" />

                    <asp:BoundField DataField="Password" HeaderText="Password" />

                    <asp:BoundField DataField="DateOfBirth" HeaderText="Date of Birth"
                        DataFormatString="{0:dd-MM-yyyy}" />

                    <asp:BoundField DataField="PhoneNumber" HeaderText="Phone Number" />

                    <asp:BoundField DataField="Email" HeaderText="Email" />

                    <asp:BoundField DataField="Address" HeaderText="Address" />

                </Columns>

                <HeaderStyle BackColor="#007ACC"
                    ForeColor="White"
                    Font-Bold="true" />

            </asp:GridView>

        </div>

    </form>

</body>
</html>