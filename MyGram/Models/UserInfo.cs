using System;
namespace MyGram.Models
{
    public class UserInfo
    {
        public UserInfo()
        {
        }
        public string Name { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }

        public override string ToString()
        {


            string result = $"User saved, user information is the folowing: {Name}, Gender:{Gender}, Email: {Email}, Country: {Country}";
            return (result);
        }
    }
}
    

