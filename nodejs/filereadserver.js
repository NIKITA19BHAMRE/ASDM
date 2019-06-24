var http=require("http");
var fs=require("fs");
function process_request(req,resp)
{
fs.readFile("text.txt",function(err,data){
resp.write(data);
resp.end();
});

}
var server=http.createServer(process_request);
server.listen(4000);
console.log("server is listening at port 4000");