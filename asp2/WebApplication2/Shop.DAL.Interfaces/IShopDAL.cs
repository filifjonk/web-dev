using Microsoft.AspNetCore.Mvc;
using Shop.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Shop.DAL.Interfaces
{
    public interface IShopDAL
    {
         JsonResult Get();
    }
}
