var http=require('http');
var express = require('express'); 
var app=express();

var customerController=function(req, res){
  console.log("Invoking  rest api for product list");
  var customer = [
    {id:1, customer:"Tejal", acc_no:100, Balance:100000},
    {id:2, customer:"Raj",acc_no:100, Balance:25000},
    {id:3, customer:"aditya",acc_no:100, Balance:78000}
  ];
  res.send(customer);
};

app.get('/customer',customerController);
var server = app.listen(8087, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("service running on", host, port)
})
