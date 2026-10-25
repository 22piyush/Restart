using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;

namespace Session_17.Controllers
{
    public class ParamsController : Controller
    {
        public string Index1(int id)
        {
            return "The Value if is is:" + id;
        }

        public string Index2(int id = 1)
        {
            return "The Value if is is:" + id;
        }

        public string Index3(int? id)
        {
            return "The Value if is is:" + id;
        }

        public string Index4(int id, string Name)
        {
            return "The Value if is is:" + id + Name;
        }

        public string Index5(int? id , string Name)
        {
            return "The Value if is is:" + id + Name;
        }

        public string Index6()
        {
            int Pid = Convert.ToInt32(Request.QueryString["Pid"]);
            string Pname = Convert.ToString(Request.QueryString["Pname"]);
            double Price = Convert.ToDouble(Request.QueryString["Price"]);

            return $"Pid: {Pid}; Pname: {Pname}; Price: {Price}";
        }

    }
}