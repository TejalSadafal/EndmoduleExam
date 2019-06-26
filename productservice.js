var http=require('http');   

var product ={
    title:"Solar street lamb",
    description:"Bulb charged in sunlight and glow at night by using the restoring it ",
    unitprice:1500,
    likes:7000,
    quantity:50000
};

var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(product));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");