//var builder = WebApplication.CreateBuilder(args);


//builder.Services.AddControllers();

//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();

//var app = builder.Build();


//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();

//app.UseAuthorization();

//app.MapControllers();

//app.Run();


using Ecommerce.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<EcommerceDataContext>(
    options => options.UseSqlServer(
        builder.Configuration.GetConnectionString("Default")
    )
);

var app = builder.Build();

app.UseHttpsRedirection();

app.MapControllers();

app.Run();