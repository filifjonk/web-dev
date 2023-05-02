using System.Collections.Generic;

namespace WebApplication2.Models
{
    public class UserConstants
    {
        public static List<User> Users = new List<User>()
        {
            new User() { Id = 1, Login = "qwe", Password = "rty"},
        };
    }
}
