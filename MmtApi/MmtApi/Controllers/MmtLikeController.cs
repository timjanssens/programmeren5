using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MmtApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MmtApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MmtLikeController : ControllerBase
    {

        private readonly MmtContext mmtContext;
        public MmtLikeController(MmtContext context)
        {
            mmtContext = context;
        }

        [HttpPost]
        public MmtLike PostLike(MmtLike item)
        {
            var mmtLike = mmtContext.MmtLikes.Where(a => a.Key == item.Key).FirstOrDefault();

            if (mmtLike == null)
            {
                mmtContext.MmtLikes.Add(item);
                mmtContext.SaveChanges();
                mmtLike = item;
            }
            else
            {
                mmtLike.Likes = mmtLike.Likes + 1;
                mmtContext.MmtLikes.Update(mmtLike);
                mmtContext.SaveChanges();
            }
            return mmtLike;
        }

        [HttpGet("{key}")]
        public MmtLike GetLikes(string key)
        {
            var mmtLike = mmtContext.MmtLikes.Where(a => a.Key == key).FirstOrDefault();

            mmtLike = mmtLike == null ? new MmtLike(key) : mmtLike;
            return mmtLike;

        }
    }
}