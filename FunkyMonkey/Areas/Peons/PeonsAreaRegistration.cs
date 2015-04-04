using System.Web.Mvc;

namespace FunkyMonkey.Areas.Peons
{
    public class PeonsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Peons";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            //context.MapRoute(
            //    "PeonsOverride",
            //    "Peons/{*.}",
            //    new { controller = "Home", action = "Index", area = "" },
            //    new string[] { "FunkyMonkey.Areas.Peons.Controllers" }
            //);
            context.MapRoute(
                "Peons_default",
                "Peons/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                new string[] { "FunkyMonkey.Areas.Peons.Controllers" }
            );
        }
    }
}