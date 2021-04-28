using System;
namespace MyGram.Models
{
    public class UserLogin
    {
        public UserLogin()
        {
        }


        public string UserName { get; set; }
        public string Password { get; set; }

        public override string ToString()
        {


            string result = $"User is: {UserName} from form and password is:{Password} from form";
            return (result);
        }
    }
}