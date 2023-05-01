using Microsoft.AspNetCore.Mvc;
using Shop.BLL.Interfaces;
using Shop.DAL.Interfaces;
using Shop.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shop.BLL
{
    public class ShopBLL : IShopBLL
    {
        private IShopDAL _shopDAL;

        public ShopBLL(IShopDAL shopDAL)
        {
            _shopDAL = shopDAL;
        }
        public JsonResult Get()
        {
            return _shopDAL.Get();
        }
    }
}
