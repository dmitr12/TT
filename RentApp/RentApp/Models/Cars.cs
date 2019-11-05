using System;
using System.Collections.Generic;

namespace RentApp
{
    public partial class Cars
    {
        public Cars()
        {
            Orders = new HashSet<Orders>();
        }

        public string RegistrationNumber { get; set; }
        public string Mark { get; set; }
        public string Model { get; set; }
        public string Class { get; set; }
        public DateTime YearIssue { get; set; }

        public virtual ICollection<Orders> Orders { get; set; }
    }
}
