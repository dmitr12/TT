using System;
using System.Collections.Generic;

namespace RentApp
{
    public partial class Users
    {
        public Users()
        {
            Orders = new HashSet<Orders>();
        }

        public string NumberDriverLicense { get; set; }
        public string Firstname { get; set; }
        public string Name { get; set; }
        public DateTime DateBirth { get; set; }

        public virtual ICollection<Orders> Orders { get; set; }
    }
}
