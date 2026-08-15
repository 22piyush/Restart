
using System.Linq;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace MVCNew
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {

            ViewEngines.Engines.Remove(
                ViewEngines.Engines.OfType<WebFormViewEngine>().First()
            );

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
