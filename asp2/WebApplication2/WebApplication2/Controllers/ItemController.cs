using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Shop.BLL.Interfaces;
using Shop.Entities;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly ILogger<ItemController> _logger;

        private IShopBLL _shopBLL;

        public ItemController(ILogger<ItemController> logger, IShopBLL shopBLL)
        {
            _logger = logger;
            _shopBLL = shopBLL;
        }

     

        [HttpGet]
        [Authorize]
        //public IEnumerable<Item> Get()
        public JsonResult Get()
        {
            return _shopBLL.Get();
        }
    }
}
