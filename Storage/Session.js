var express = require("express");
var session = require("express-session");
var app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get("/",function(req,res){
	if(req.session.login == "1"){
		res.send("welcome"+req.session.username);
	}else{
		res.send("login failed");
	}
});
app.get("/login",function(req,res){
	req.session.login = "1";	//设置这个session
	req.session.username = "Lz";
	res.send("你已经成功登陆");
});
app.listen(3000);