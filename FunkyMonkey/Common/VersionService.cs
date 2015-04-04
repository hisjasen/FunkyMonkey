using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;

namespace FunkyMonkey.Common
{
    public interface IVersionService
    {
        ApplicationMetadata GetApplicationMetadata();
        string GetApplicationVersionString();
    }

    public class VersionService : IVersionService
    {
        private static Lazy<Assembly> assembly = new Lazy<Assembly>(() =>
        {
            return Assembly.GetExecutingAssembly();
        });

        public ApplicationMetadata GetApplicationMetadata()
        {
            //var assembly = typeof(FunkyMonkey.MvcApplication).Assembly;
            var version = assembly.Value.GetName().Version;
            var product = assembly.Value.GetCustomAttributes(typeof(AssemblyProductAttribute), true).FirstOrDefault() as AssemblyProductAttribute;

            var metadata = new ApplicationMetadata
            {
                Version = version,
                Name = product.Product
            };

            return metadata;
        }

        public string GetApplicationVersionString()
        {
            ApplicationMetadata metadata = this.GetApplicationMetadata();
            var prettyPrint = String.Format("{0} v{1}.{2}.{3}.{4}",
                metadata.Name, metadata.Version.Major, metadata.Version.Minor, metadata.Version.Build, metadata.Version.Revision);
            return prettyPrint;
        }
    }
}