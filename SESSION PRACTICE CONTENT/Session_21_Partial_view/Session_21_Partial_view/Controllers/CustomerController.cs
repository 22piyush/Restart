using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using Session_21_Partial_view.Models;

namespace Session_21_Partial_view.Controllers
{
    public class CustomerController : Controller
    {
        public ViewResult DisplayCustomers()
        {
            List<Customer> customers = new List<Customer>
            {
                new Customer
                {
                    Custid = 101,
                    Name = "Scott",
                    Account = "xyz",
                    Balance = 5000,
                    City = "Pune",
                    Status = true,
                    Photo = "scott.jpg"
                },
                new Customer
                {
                    Custid = 102,
                    Name = "Priya",
                    Account = "abc",
                    Balance = 12000,
                    City = "Mumbai",
                    Status = true,
                    Photo = "priya.jpg"
                },
                new Customer
                {
                    Custid = 103,
                    Name = "Rahul",
                    Account = "pqr",
                    Balance = 800,
                    City = "Nashik",
                    Status = false,
                    Photo = "rahul.jpg"
                },
                new Customer
                {
                    Custid = 104,
                    Name = "Anita",
                    Account = "lmn",
                    Balance = 25000,
                    City = "Nagpur",
                    Status = true,
                    Photo = "anita.jpg"
                }
            };

            return View(customers);
        }
    }
}