using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FunkyMonkey.Models.DomainModels
{
    public class UserOption
    {
        public int Rank { get; set; }
        public DateTime? Date { get; set; }
    }
}