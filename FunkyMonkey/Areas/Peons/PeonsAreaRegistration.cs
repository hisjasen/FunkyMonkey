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
            context.MapRoute(
                "Peons_default",
                "Peons/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                new string[] { "FunkyMonkey.Areas.Peons.Controllers" }
            );
        }
    }
}