using Newtonsoft.Json;
using SiteTrade.Models;

namespace SiteTrade
{
    public class Roentity
    {
        public static void Ser(object obj, string path)
        {
            var jsonString = JsonConvert.SerializeObject(obj);
            File.WriteAllText(path, jsonString);
        }

        public static void Des(Card card, string path)
        {
            var jsonString = File.ReadAllText(path);
            var obj = JsonConvert.DeserializeObject<Card>(jsonString);
        }
    }
}
