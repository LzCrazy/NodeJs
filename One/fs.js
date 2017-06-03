var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req,res) {
	if(req.url == "/favicon.icon"){
		return;
	}
	var userid =  parseInt(Math.random()*8192)+10000;
	console.log("welcome:"+userid);

	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});

	fs.readFile('./file/1.txt',function(err,data){
		if(err){
			throw err;
		}
		console.log(userid+"文件已经读取完毕了");
		res.end(data)
	});
});
server.listen(4000,"localhost");
// 注意，node只适应IO，不适应计算


/*
File System
	1.
*/