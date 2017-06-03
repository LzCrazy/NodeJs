var http = require('http')
var url = require('url')

var server=http.createServer(function(req,res){
	var queryObj = url.parse(req.url,true).query
	var name = queryObj.name
	var age = queryObj.age
	var sex=queryObj.sex

	res.end("服务器接收到请求："+"名字："+name+"年龄："+age+"性别："+sex)
})
server.listen(4000,"localhost")