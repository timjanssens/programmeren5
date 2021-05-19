using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace MmtApiSecond.Models
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
