using System;
namespace MyGram.Models
{
    public class Images
    {
        public Images()
        {
        }

        public int imageId { get; set;}
        public string imageName { get; set;}
        public string imagePath { get; set;}

        public override string ToString()
        {


            string result = $"The Image has the following information : {imageId}, ImageName {imageName}, ImagePath{imagePath}";
            return (result);
        }
    }
}
        
   