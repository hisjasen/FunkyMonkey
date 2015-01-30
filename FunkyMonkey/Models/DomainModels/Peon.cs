using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FunkyMonkey.Models.DomainModels
{
    public class Peon
    {
        public int Id { get; set; }

        [StringLength(25)]
        public string Name { get; set; }
        public string Title { get; set; }
        public int Rank { get; set; }
    }
}