var http = require('http');
var url = require('url');
var fs = require('fs');
var path =require('path');

http.createServer(function(req,res){
	//用户路径
	var pathname =  url.parse(req.url).pathname;
	//默认首页
	if(pathname == "/"){
		pathname = "index.html"
	}
	//拓展名
	var extname = path.extname(pathname);

	//读取文件
	fs.readFile('./static/'+pathname,function(err,data){
		if(err){
			fs.readFile("./static/404.html",function(err,data){
				res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"});
				res.end(data);
			});
			return;
		};
		/*
			MIME类型：网页文件(text/html)，jpg文件(image/jpg)
		*/
		var mine =getMime(extname);
		res.writeHead(200,{"Content-Type":mine});

		res.end(data);
	});
}).listen(4000,"localhost");

function getMime(extname){
	switch(extname){
		case ".html":
			return "text/html";
			break;
		case ".jpg":
			return "image/jpg";
			break;
		case ".css":
			return "text/css";
			break;	
	}
}
