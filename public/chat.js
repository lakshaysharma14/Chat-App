var socket=io.connect("http://localhost:3000");

var handle=document.getElementById("handle");

var message=document.getElementById("message");

var btn=document.getElementById("send");

var output=document.getElementById("chat-window");

var feedback=document.getElementById("feedback");

btn.addEventListener("click",function()
{
	socket.emit("chat",{message:message.value,handle:handle.value});

})

message.addEventListener("keypress",function()
{
	

	socket.emit("typing",handle.value);
})

socket.on("chat",function(data)
{
	feedback.innerHTML="";
	output.innerHTML += "<p>" + data.handle + ":" + data.message + "</p>";
})

socket.on("typing",function(data)
{
	feedback.innerHTML="<p>" + data + " is typing a message.......</p>";
})