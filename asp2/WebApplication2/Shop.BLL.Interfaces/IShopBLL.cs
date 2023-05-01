using Microsoft.AspNetCore.Mvc;
using Shop.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shop.BLL.Interfaces
{
    public interface IShopBLL
    {
       JsonResult Get();
    }
}
