using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FunkyMonkey.Common;

namespace FunkyMonkey.Areas.Peons.Controllers
{
    public class HomeController : Controller
    {
        private IPeonService peonService;

        public HomeController()
        {
            this.peonService = new PeonService(PeonStore.GetPeons());
        }

        // GET: Peons/Home
        public ActionResult Index()
        {
            return PartialView();
        }

        public ActionResult List()
        {
            var peons = this.peonService.GetPeons();
            return Json(peons, JsonRequestBehavior.AllowGet);
        }
    }
}