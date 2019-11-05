using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RentApp
{
    public class Filter
    {
        RentDBContext dbContext;
        public Filter(RentDBContext context)
        {
            dbContext = context;
        }
        public IEnumerable<Orders> GetListOrdersByUserName(string userName)
        {
            var users = dbContext.Users.Where(user => user.Name == userName);
            var orders = new List<Orders>();
            foreach (var user in users)
            {
                var drOrders = dbContext.Orders.Where(order => order.NumberDriverLicense == user.NumberDriverLicense);
                orders.AddRange(drOrders);
            }
            return orders;
        }
        public IEnumerable<Orders> GetListOrdersByModel(string model)
        {
            var cars = dbContext.Cars.Where(user => user.Model == model);
            var orders = new List<Orders>();
            foreach (var car in cars)
            {
                var drOrders = dbContext.Orders.Where(order => order.RegistrationNumber == car.RegistrationNumber);
                orders.AddRange(drOrders);
            }
            return orders;
        }
        public IEnumerable<Orders> GetListOrdersByMark(string mark)
        {
            var cars = dbContext.Cars.Where(car => car.Mark == mark);
            var orders = new List<Orders>();
            foreach (var car in cars)
            {
                var drOrders = dbContext.Orders.Where(order => order.RegistrationNumber == car.RegistrationNumber);
                orders.AddRange(drOrders);
            }
            return orders;


        }
    }
}
