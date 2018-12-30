namespace WebApiAngularApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DateAdded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "DateAdded", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Products", "DateAdded");
        }
    }
}
