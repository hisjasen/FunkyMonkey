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
            //var ts = TimeSpan.FromHours(25);
            //var hrs = ts.TotalHours;
            //ViewBag.Hours = hrs.ToString();
            //ViewBag.Time = ts;
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
            var result = imgService.UploadImage(uploadFile, pid);

            return Json(new { result = "success", filename = uploadFile.FileName, pid = pid, height = result.Height, width = result.Width });
        }

        [HttpPost]
        public ActionResult UploadBase64(string uploadFile, string pid, string name, int seq)
        {
            string filename = String.Format("{0}_{1:000}.jpg", pid, seq);
            string base64 = uploadFile.Substring(uploadFile.IndexOf(',') + 1);  // drop prefixed "data:image/jpeg;base64,"
            base64 = base64.Trim('\0');  // trim null termination chars
            var result = imgService.UploadImage(base64, pid, filename);

            return Json(new { result = "success", name = name, filename = filename, pid = pid, height = result.Height, width = result.Width });
        }
    }
}