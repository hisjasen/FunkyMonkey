using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FunkyMonkey.Models.DomainModels;

namespace FunkyMonkey.Common
{
    public partial class PeonStore
    {
        private static void Populate(HashSet<Peon> store)
        {
            store.Add(new Peon
            {
                Id = 1, Name = "Alice", Title = "Chief 1st Assistant to the Principal Backup Aide for Trivial Matters", Rank = 10
            });

            store.Add(new Peon
            {
                Id = 2,
                Name = "Burt",
                Title = "Head Consensus Builder for Impractical Intiatives",
                Rank = 4
            });

            store.Add(new Peon
            {
                Id = 3,
                Name = "Chuck",
                Title = "Lead Sycophant for the Assistant Consensus Builder's Scapegoat, First-Class",
                Rank = 7
            });

            store.Add(new Peon
            {
                Id = 4,
                Name = "Ed",
                Title = "Someone Super Important",
                Rank = 3
            });
        }
    }
}