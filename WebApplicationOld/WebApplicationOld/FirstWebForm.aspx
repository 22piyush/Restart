<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FirstWebForm.aspx.cs" Inherits="WebApplicationOld.FirstWebForm" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Server Date:
            <% Response.Write(DateTime.Now.ToShortTimeString()); %>
            <br />
            Server Time:
            <% Response.Write(DateTime.Now.ToLongTimeString()); %>
        </div>
    </form>
</body>
</html>
