var express = require('express')
var bodyParse = require('body-parser')

var app =  express()
// urlencoded:解析主体，只查看Content-Type和type   extended：false支持字符串或数组
app.use(bodyParse.urlencoded({extended:false}))	

//html文件路径请求
app.get('/',function(req,res) {
	res.sendFile(__dirname+'/public/home.html')
})

//处理登陆请求
app.post('/login',function(req,res){
	if('admin' == req.body.username && '213'==req.body.password){
		res.send('login success')
	}else{
		res.send('failed,bad username or password')
	}
})
app.listen(8899)