using Newtonsoft.Json;

namespace SiteTrade.Models
{
    public class Photo
    {
        private static string path = @"C:\Users\Poma\Desktop\photo.json";

        public string Name { get; set; }
        public string base64 { get; set; }




        public static void SavePhoto(Photo photo)
        {
            var jsString = File.ReadAllText(path);

            var list = JsonConvert.DeserializeObject<List<Photo>>(jsString);


          

            if (list == null) list = new List<Photo>();
            if (list.Any(x => x.Name == photo.Name)) return;

            list.Add(photo);
            
            jsString = JsonConvert.SerializeObject(list);

            File.WriteAllText(path, jsString);

        }

        public static Photo? GetPhoto(string name)
        {
            var jsString = File.ReadAllText(path);

            if (jsString == "") return null;

            var list = JsonConvert.DeserializeObject<List<Photo>>(jsString);

            if (list == null) return null;

            Photo response = list.First(x => x.Name == name);

            return response;
        }
    }
}
