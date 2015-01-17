using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FunkyMonkey.Models.DomainModels;

namespace FunkyMonkey.Controllers
{
    public class HomeController : Controller
    {
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
                Session["UserOption"] = new UserOption { Date = DateTime.Now, Rank = 2 };
            }
            return Json(userOption, JsonRequestBehavior.AllowGet);
        }
    }
}