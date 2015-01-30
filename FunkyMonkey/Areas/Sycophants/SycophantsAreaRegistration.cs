using System.Web.Mvc;

namespace FunkyMonkey.Areas.Sycophants
{
    public class SycophantsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Sycophants";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "Sycophants_default",
                "Sycophants/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                new string[] { "FunkyMonkey.Areas.Sycophants.Controllers" }
            );
        }
    }
}