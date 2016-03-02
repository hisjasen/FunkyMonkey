using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FunkyMonkey.Models.DomainModels
{
    public class Monkey
    {
        public UserOption UserOption { get; set; }
        public Peon Peon { get; set; }
    }
}