using System.Web;
using System.Web.Optimization;
using TypeScriptBundleTransform;

namespace FunkyMonkey
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui")
                .Include("~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval")
                .Include("~/Scripts/jquery.validate*")
                .Include("~/Scripts/jquery.unobtrusive-ajax.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-sanitize.js")
                .Include("~/Scripts/angular-ui-router.js")
                .Include("~/Scripts/angular-cookies.js")
                .Include("~/Scripts/angular-ui/ui-bootstrap-tpls.js")
                .Include("~/Scripts/ui-router-extras/ct-ui-router-extras.js"));

            bundles.Add(new ScriptBundle("~/bundles/app")
                .Include("~/Scripts/app/app.js")
                .IncludeDirectory("~/Scripts/app/directives", "*.js", searchSubdirectories: true)
                .IncludeDirectory("~/Scripts/app/controllers", "*.js", searchSubdirectories: true)
                .IncludeDirectory("~/Scripts/app/services", "*.js", searchSubdirectories: true)
                .IncludeDirectory("~/Scripts/app/filters", "*.js", searchSubdirectories: true)
                .Include("~/Scripts/app/appStart.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/lib")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Scripts/respond.js")
                .Include("~/Scripts/jcrop/jquery.jcrop.js")
                .Include("~/Scripts/dropzone-4.0.0/dropzone.js")
                .Include("~/Scripts/blueimp/load-image.all.js")
                .Include("~/Scripts/blueimp/canvas-to-blob.js"));

            //bundles.Add(new ScriptBundle("~/bundles/ts")
            //    .IncludeDirectory("~/Scripts/ts", "*.ts"));

            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/bootstrap.css")
                .Include("~/Content/dropzone-4.0.0/dropzone.css")
                .Include("~/Content/dropzone-4.0.0/basic.css")
                .Include("~/Content/jcrop/jquery.jcrop.css")
                .Include("~/Content/site.css")
            );

#if (DEBUG)
            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
