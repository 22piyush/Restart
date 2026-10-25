using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Session_17
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Students",
                url: "Students",
                defaults: new { controller = "Student", action = "Display"}
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}/{name}",
                defaults: new 
                { 
                    controller = "Home", 
                    action = "Index", 
                    id = UrlParameter.Optional,
                    name = UrlParameter.Optional
                }
            );
        }       
    }
}
