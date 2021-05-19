using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MmtApi.Models
{
    public class MmtLike
    {
        public int Id { get; set; }
        public string Key { get; set; }
        public string Name { get; set; }
        public long Likes { get; set; }

        public MmtLike() { }
        public MmtLike(string key)
        {
            this.Id = 0;
            this.Key = key;
            this.Name = "niet van toepassing";
            this.Likes = 0;
        }
    }
}
