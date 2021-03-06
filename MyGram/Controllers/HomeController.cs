using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyGram.Models;

namespace MyGram.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        
        public IActionResult Register()
        {
            return View();
        }

        public IActionResult LogUser()
        {
            return View();
        }
        public IActionResult LogIn([FromBody] UserLogin user)


        {
            return Content(user.ToString());
        }

            public IActionResult Image([FromBody] Images images)


            {
                return Content(images.ToString());

            }

        public IActionResult RegisterUser([FromBody] UserInfo user)
        {
            return Content(user.ToString());
        }

            [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
            public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
