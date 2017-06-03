var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
	if(req.url == "/favicon.ico"){
		return;
	}
	 var wenjianjia  =[];
	 fs.readdir('./album',function(err,files){
	 	//files是个文件名的数组，并不是文件的数组，表示./album这个文件夹中的所有东西
		//包括文件、文件夹
		for(var i =0;i<files.length;i++){
			var thefilename=files[i];
			// console.log(thefile);
			fs.stat('./album/'+thefilename,function(err,stats){
				if(stats.isDirectory()){
					wenjianjia.push(thefilename);
				}
				console.log(wenjianjia);
			})
		}
	 })
});
server.listen(4000,"localhost");

