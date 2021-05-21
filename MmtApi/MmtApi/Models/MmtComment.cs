using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MmtApi.Models
{
    public class MmtComment
    {
        public int Id { get; set; }
        public string Key { get; set; }
        public string Name { get; set; }
        public string Comment { get; set; }

        public MmtComment() { }
        public MmtComment(string key)
        {
            this.Id = 0;
            this.Key = key;
            this.Name = "niet van toepassing";
            this.Comment = "";
        }
    }
}
