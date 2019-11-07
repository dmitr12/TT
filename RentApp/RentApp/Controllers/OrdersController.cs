using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentApp;

namespace RentApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly RentDBContext _context;
        Filter filter;
        public OrdersController(RentDBContext context)
        {
            _context = context;
            filter = new Filter(_context);
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Orders>>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }

        [HttpGet("startdate/{date}")]
        public IEnumerable<Orders> GetOrdersByStartDate(string date)
        {
            return _context.Orders.Where(order => order.StartDateHire == DateTime.Parse(date));
        }
        [HttpGet("enddate/{date}")]
        public IEnumerable<Orders> GetOrdersByEndDate(string date)
        {
            return _context.Orders.Where(order => order.EndDateHire == DateTime.Parse(date));
        }
        [HttpGet("username/{name}")]
        public IEnumerable<Orders> GetOrdersByUserName(string name)
        {
            return filter.GetListOrdersByUserName(name);
        }
        [HttpGet("modelcar/{model}")]
        public IEnumerable<Orders> GetOrdersByModelCar(string model)
        {
            return filter.GetListOrdersByModel(model);
        }
        [HttpGet("markcar/{mark}")]
        public IEnumerable<Orders> GetOrdersByMarkCar(string mark)
        {
            return filter.GetListOrdersByMark(mark);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOrders(int id, Orders orders)
        {
            if (id != orders.IdOrder)
            {
                return BadRequest();
            }

            _context.Entry(orders).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OrdersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Orders>> PostOrders(Orders orders)
        {
            _context.Orders.Add(orders);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOrders", new { id = orders.IdOrder }, orders);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<IEnumerable<Orders>>> DeleteOrders(int id)
        {
            var orders = await _context.Orders.FindAsync(id);
            if (orders == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(orders);
            await _context.SaveChangesAsync();

            return _context.Orders.ToList();
        }

        private bool OrdersExists(int id)
        {
            return _context.Orders.Any(e => e.IdOrder == id);
        }
    }
}
