﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Vouchers
{
    public class VouchersDBContext : DbContext
    {
        private readonly VouchersConfig config;

        public VouchersDBContext(IOptions<VouchersConfig> cfg)
        {
            config = cfg.Value;
        }

        public DbSet<Voucher> Vouchers { get; set; }
        public DbSet<VoucherDetail> VoucherDetails { get; set; }
        public DbSet<BalanceAccount> BalanceAccounts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(config.ConnectionStrings.LocalDBConnection);
            base.OnConfiguring(optionsBuilder);
        }
    }
}