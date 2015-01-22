using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FunkyMonkey.Models.DomainModels;

namespace FunkyMonkey.Common
{
    public partial class PeonStore
    {
        private static Lazy<HashSet<Peon>> peons = new Lazy<HashSet<Peon>>(() =>
        {
            var peons = new HashSet<Peon>();
            Populate(peons);
            return peons;
        });

        public static HashSet<Peon> GetPeons()
        {
            return peons.Value;
        }
    }
}