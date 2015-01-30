using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FunkyMonkey.Common;

namespace FunkyMonkey.Areas.Sycophants.Controllers
{
    public class HomeController : Controller
    {
        private IPeonService peonService;

        public HomeController()
        {
            this.peonService = new PeonService(PeonStore.GetPeons());
        }

        // GET: Sycophants/Home
        public ActionResult Index()
        {
            var peons = peonService.GetPeons().First();

            return View(peons);
        }

        [HttpPost]
        public JsonResult EditJson(int id)
        {
            return Json(new { success = true, id = id });
        }

        [HttpPost]
        public PartialViewResult Edit(HttpPostedFileBase file)
        {
            //ViewBag.Filename = file.FileName;
            return PartialView("_EditResponse");
        }
    }
}