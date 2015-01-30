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
        private IImageService imgService;

        public HomeController()
        {
            this.peonService = new PeonService(PeonStore.GetPeons());
            this.imgService = new ImageService();
        }

        // GET: Peons/Home
        public ActionResult Index()
        {
            return PartialView();
        }

        public ActionResult DropzoneTemplate()
        {
            return PartialView();
        }

        public ActionResult List()
        {
            var peons = this.peonService.GetPeons();
            return Json(peons, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Upload(HttpPostedFileBase uploadFile, string pid)
        {
            var result = imgService.UploadImage(uploadFile);

            return Json(new { result = "success", filename = uploadFile.FileName, pid = pid, height = result.Height, width = result.Width });
        }
    }
}