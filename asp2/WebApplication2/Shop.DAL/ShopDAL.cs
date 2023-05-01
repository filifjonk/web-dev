using Microsoft.AspNetCore.Mvc;
using Shop.DAL.Interfaces;
using Shop.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Shop.DAL
{
    public class ShopDAL:IShopDAL
    {
        private string _connectionString;

        public ShopDAL(string connectionstring)
        {
            this._connectionString = connectionstring;
        }


        private SqlConnection _connection;
        //public IEnumerable<Item> Get()
        public JsonResult Get()
        {
            using (_connection = new SqlConnection(_connectionString))
            {   
                string query = @"
                            select id, productName, img, price, typeId from dbo.Product";
                var command = new SqlCommand(query, _connection)
                {
                    CommandType = CommandType.StoredProcedure
                };
                DataTable table = new DataTable();
                //string sqlDataSource = _configuration.GetConnectionString("AppCon");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(_connectionString))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }
                //string jsonString = JsonSerializer.Serialize(table);
                return new JsonResult(table);
            }
        }
    }
}
