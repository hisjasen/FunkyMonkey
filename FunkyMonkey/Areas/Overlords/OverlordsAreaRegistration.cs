using System.Web.Mvc;

namespace FunkyMonkey.Areas.Overlords
{
    public class OverlordsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Overlords";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            //context.MapRoute(
            //    "Overlords_default",
            //    "Overlords/{controller}/{action}/{id}",
            //    new { action = "Index", id = UrlParameter.Optional }
            //);
            context.MapRoute(
                "Overlords_default",
                "Overlords/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional },
                new string[] { "FunkyMonkey.Areas.Overlords.Controllers" }
            );
        }
    }
}