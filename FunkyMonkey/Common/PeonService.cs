using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FunkyMonkey.Models.DomainModels;

namespace FunkyMonkey.Common
{
    public interface IPeonService
    {
        IEnumerable<Peon> GetPeons();
        Peon GetById(int id);
    }

    public class PeonService : IPeonService
    {
        private HashSet<Peon> peons;

        public PeonService(HashSet<Peon> peons)
        {
            this.peons = peons;
        }

        public IEnumerable<Peon> GetPeons()
        {
            return peons.OrderBy(p => p.Rank);
        }

        public Peon GetById(int id)
        {
            var peon = peons.Where(p => p.Id == id).FirstOrDefault();
            return peon;
        }
    }
}