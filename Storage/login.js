var express = require("express");
var app = express();
var db = require("./model/db.js");
var session = require("express-session");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    if(req.session.login == "1"){
        res.send("欢迎" + req.session.username);
    }else{
        res.send("没有成功登陆");
    }
});
app.get("/login",function(req,res){
	res.render("Login");
})
app.get("/checklogin",function(req,res){
	var username = req.query.username;
	var password = req.query.password;
	db.find("users",{"username":username},function(err,result){
		if(result.length == 0){
			res.send("你的登陆名写错了，没有这个注册用户");
			return;
		}
		var dbpassword = result[0].password;
		if(dbpassword == password){
			req.session.log = "1";
			req.session.username = result[0].username;
			res.send("login success,you are:"+result[0].username);
		}else{
			res.send("密码有错");
		}
	});
});
app.listen(3000);