var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
	if(req.url == "/favicon.ico"){
		return;
	}
	// fs.mkdir('./views/pic');
	fs.stat('./views/pic',function(err,data){
		console.log(data.isDirectory);
	})
});
server.listen(4000,"localhost");

/*
	stat检测文件的状体

	检测文件或目录等等
	stats.isFile()
	stats.isDirectory()
	stats.isBlockDevice()
	stats.isCharacterDevice()
	stats.isSymbolicLink() (仅对 fs.lstat() 有效)
	stats.isFIFO()
	stats.isSocket()
*/