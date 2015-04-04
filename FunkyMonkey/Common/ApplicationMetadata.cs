using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Mvc;

namespace FunkyMonkey.Common
{
    public class ApplicationMetadata
    {
        public Version Version { get; set; }
        public string Name { get; set; }
    }
}