using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace RentApp
{
    public partial class RentDBContext : DbContext
    {
        public RentDBContext()
        {
        }

        public RentDBContext(DbContextOptions<RentDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cars> Cars { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity<Cars>(entity =>
            {
                entity.HasKey(e => e.RegistrationNumber)
                    .HasName("PK__Cars__E8864603C3179C36");

                entity.Property(e => e.RegistrationNumber)
                    .HasMaxLength(8)
                    .ValueGeneratedNever();

                entity.Property(e => e.Class)
                    .IsRequired()
                    .HasMaxLength(1);

                entity.Property(e => e.Mark)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.Model)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.YearIssue).HasColumnType("date");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.IdOrder)
                    .HasName("PK__Orders__C38F3009C2C2D89B");

                entity.Property(e => e.Comment)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.EndDateHire).HasColumnType("date");

                entity.Property(e => e.NumberDriverLicense)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.RegistrationNumber)
                    .IsRequired()
                    .HasMaxLength(8);

                entity.Property(e => e.StartDateHire).HasColumnType("date");

                entity.HasOne(d => d.NumberDriverLicenseNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.NumberDriverLicense)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Orders__NumberDr__4D94879B");

                entity.HasOne(d => d.RegistrationNumberNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.RegistrationNumber)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Orders__Registra__4E88ABD4");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.NumberDriverLicense)
                    .HasName("PK__Users__9DF713685DD82EB0");

                entity.Property(e => e.NumberDriverLicense)
                    .HasMaxLength(10)
                    .ValueGeneratedNever();

                entity.Property(e => e.DateBirth).HasColumnType("date");

                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });
        }
    }
}
