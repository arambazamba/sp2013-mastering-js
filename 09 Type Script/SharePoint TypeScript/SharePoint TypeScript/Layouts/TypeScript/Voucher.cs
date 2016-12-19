using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharePoint_TypeScript.Layouts.TypeScript
{
    public class Voucher
    {
        public int Id { get; set; }
        public string Text { get; set; }

        public decimal Amount { get; set; }
        public List<int> Somethings { get; set; }
    }
}
