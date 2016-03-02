using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FunkyMonkey.Areas.Overlords.Controllers
{
    public class HomeController : Controller
    {
        // GET: Overlords/Home
        public ActionResult Index()
        {
            return PartialView();
        }
    }
}