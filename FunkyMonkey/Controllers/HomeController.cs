using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FunkyMonkey.Models.DomainModels;

namespace FunkyMonkey.Controllers
{
    public class Info
    {
        public string AppName { get; set; }
        public string Address { get; set; }
    }

    public class HomeController : Controller
    {
        [ChildActionOnly]
        [OutputCache(Duration=500, VaryByParam="*")]
        public ActionResult Info()
        {
            Info info = new Info
            {
                AppName = "FunkyMonkey",
                Address = "123 ABC Street"
            };

            return PartialView("_Info", info);
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult LandingPage()
        {
            return PartialView();
        }

        public ActionResult GetUserOption()
        {
            var userOption = Session["UserOption"] as UserOption;
            if (userOption == null)
            {
                userOption = new UserOption { Date = DateTime.Now, Rank = 2 };
                Session["UserOption"] = userOption;
            }

            System.Threading.Thread.Sleep(1000);

            return Json(userOption, JsonRequestBehavior.AllowGet);
        }

        public ActionResult FailedToStart()
        {
            return View("Error");
        }

        public ActionResult Foo()
        {
            return View("Contact");
        }

        [HttpPost]
        public ActionResult Pingback(string msg)
        {
            return Json(new { msg = msg });
        }
    }
}