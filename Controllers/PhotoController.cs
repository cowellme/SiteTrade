using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SiteTrade.Models;

namespace SiteTrade.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PhotoController : ControllerBase
    {
        [HttpGet("{name}")]
        public IActionResult? Get(string name)
        {
            try
            {
                var photo = Photo.GetPhoto(name);

                if (photo == null) return null;

                string baseString = photo.base64;
                
                var response = JsonConvert.SerializeObject(baseString);

                return Ok(response);
            }
            catch 
            { 
                return null;
            }
        }

        [HttpPost("save")]
        public IActionResult Save(Photo photo)
        {
            try
            {
                Photo.SavePhoto(photo);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }
    }
}