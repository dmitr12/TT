using System;
using System.Collections.Generic;

namespace RentApp
{
    public partial class Orders
    {
        public int IdOrder { get; set; }
        public string NumberDriverLicense { get; set; }
        public string RegistrationNumber { get; set; }
        public DateTime StartDateHire { get; set; }
        public DateTime EndDateHire { get; set; }
        public string Comment { get; set; }

        public virtual Users NumberDriverLicenseNavigation { get; set; }
        public virtual Cars RegistrationNumberNavigation { get; set; }
    }
}
