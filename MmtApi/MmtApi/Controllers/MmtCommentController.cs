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
    public class MmtCommentController : ControllerBase
    {

        private readonly MmtContext mmtContext;
        public MmtCommentController(MmtContext context)
        {
            mmtContext = context;
        }

        [HttpPost]
        public MmtComment PostComment(MmtComment item)
        {
            var mmtComment = mmtContext.MmtComments.Where(a => a.Key == item.Key).FirstOrDefault();

            if (mmtComment == null)
            {
                mmtContext.MmtComments.Add(item);
                mmtContext.SaveChanges();
                mmtComment = item;
            }
            else
            {
                //mmtComment.Comment = mmtComment.Comment + item;
                //mmtContext.MmtComments.Update(mmtComment);
                //mmtContext.SaveChanges();

                mmtContext.MmtComments.Add(item);
                mmtContext.SaveChanges();
                mmtComment = item;
            }
            return mmtComment;
        }

        [HttpGet("{key}")]
        public MmtComment GetComment(string key)
        {
            var mmtComment = mmtContext.MmtComments.Where(a => a.Key == key).FirstOrDefault();

            mmtComment = mmtComment == null ? new MmtComment(key) : mmtComment;
            return mmtComment;

        }
    }
}