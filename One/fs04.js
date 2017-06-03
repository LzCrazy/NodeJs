var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	if(req.url == "/favicon.icn"){
		return;
	}
	var userid = parseInt(Math.random() * 312)+1000
	console.log("welcome:"+userid);

	fs.readdir("./album/",function(err,files){
		var folder = [];

		(function iterator(i){
			if(i == files.length){
				console.log(folder);
				return;
			}
			fs.stat("./album/"+files[i],function(err,stats){
				if(stats.isDirectory()){
					folder.push(files[i]);
				}
				iterator(i+1)
			});
		})(0);
	});	
	res.end();
})
server.listen(4000,"localhost")