var express = require("express");
var http = require("http");
var app= express();
var server=http.createServer(app).listen(3000);
var io=require("socket.io")(server);

app.use(express.static("./public"));

io.on('connection',function(socket)
{
	console.log(socket.id);
	console.log("New Connection Established");


	socket.on("chat",function(data)
	{
		
		io.sockets.emit("chat",data)
	})


	socket.on("typing",function(data)
	{
		
		socket.broadcast.emit("typing",data);
	});


})


console.log("The Server is Listening on Port 3000");
