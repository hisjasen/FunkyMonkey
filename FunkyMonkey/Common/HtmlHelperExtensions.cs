using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace FunkyMonkey.Common
{
    public static class HtmlHelperExtensions
    {
        public static HtmlString ApplicationVersion(this HtmlHelper helper)
        {
            IVersionService svc = new VersionService();

            return new HtmlString(string.Format("<span>{0}</span>", svc.GetApplicationVersionString()));
        }

        public static HtmlString TimeSpanString(this HtmlHelper helper, TimeSpan val)
        {
            double days = val.Days;
            double hours = val.Hours + (days * 24);
            double minutes = val.Minutes;
            double seconds = val.Seconds;
            var formattedString = String.Format("{0:00}:{1:00}:{2:00}", hours, minutes, seconds);

            return new HtmlString("<span>" + formattedString + "</span><span>|" + days +"|" + val.Hours + "</span");
        }

        public static HtmlString IdSpan(this HtmlHelper helper, string id)
        {
            return new HtmlString(String.Format("<span class=\"form-control\">{0}</span>", id));
        }
    }
}