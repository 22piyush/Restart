<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FirstWebForm.aspx.cs" Inherits="WebApplicationOld.FirstWebForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head runat="server">
        <title></title>
    </head>
    <body>
        <form id="form1" runat="server">
            <div>
                Enter Name:
                <input type="text" name="text1" id="txtName1"/>
                <br />
                <br />
                <button type="submit" value="save">Submit</button>
                <asp:Button ID="Button1" runat="server" Text="Submit" />

            </div>
            <p>
                &nbsp;</p>
        </form>
    </body>
</html>
