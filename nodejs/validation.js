var http=require("http");
var url=require("url");
var query=require("querystring");
var fs=require("fs");

function process_request(req,resp)
{
var u = url.parse(req.url);
resp.writeHead(200,{'Content-Type':'text/html'});
var data2=fs.readFileSync("userpass.txt");
var str="";
str=data2.toString().split(',');
switch(u.pathname)
{
case '/':
var data1=fs.readFileSync("form1.html");
resp.write(data1);
resp.end();
break;

case '/submit':
var ob=query.parse(u.pathname);
for(var i=0;i<str.length;i+2)
{
console.log(str[i]);
console.log(" "+str[i+1]);
if(ob.username==str[i] && ob.password==str[i+1])
{
	console.log("valid user");
	resp.write("<h1>Valid User</h1>");
	break;
}
else
	if(i==(str.length))
	{
		console.log("invalid user");
		resp.write("<h1>Invalid User</h1>");
		data1=fs.readFileSync("form1.html");
		resp.write(data1);
		
	}
}
resp.end();
break;
}

}

var server=http.createServer(process_request);
server.listen(5000);
console.log("server is listening on port 5000");