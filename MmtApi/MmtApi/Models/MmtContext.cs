using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MmtApi.Models
{
    public class MmtContext : DbContext
    {
        public MmtContext(DbContextOptions<MmtContext> options)
             : base(options)
        {
        }

        public DbSet<MmtLike> MmtLikes { get; set; }
        public DbSet<MmtComment> MmtComments { get; set; }
     
    }
}
