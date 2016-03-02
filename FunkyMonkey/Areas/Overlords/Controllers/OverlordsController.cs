using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FunkyMonkey.Areas.Overlords.Models;

namespace FunkyMonkey.Areas.Overlords.Controllers
{
    public class OverlordsController : Controller
    {
        // GET: Overlords/Overlords
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Upload(Overlord model, HttpPostedFileBase[] files)
        {
            return Json(new { Status = "SUCCESS" });
        }
    }
}