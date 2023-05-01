using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shop.Entities
{
    public class Item
    {
        public int id { get; set; }

        public string productName { get; set; }

        public string img { get; set; }

        public int price { get; set; }

        public int typeId { get; set; }
    }
}
