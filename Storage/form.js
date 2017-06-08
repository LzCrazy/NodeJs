var express = require("express");
var app = express();
var formidable = require("formidable");
var db = require("./model/db.js");
var md5 = require("./model/md5.js");

app.set("view engine","ejs");

app.use(express.static("./public"));
// 注册页面
app.get("/resgist",function(req,res,next){
	res.render("resgist");

})
//登陆页面
app.get("/login",function(req,res,next){
	res.render("logins");
})
// 执行注册
app.get("/doregist",function(req,res,next){
	var username = req.query.username;
	var mima = req.query.mima;
	console.log(username+mima);
	// 加密
	mima = md5(md5(mima).substr(4,7) + md5(mima));
	// 写入数据库
	db.insertOne("users",{
		"username":username,
		"mima":mima
	},function(err,result){
		if(err){
			res.send("-1");
			return;
		}else{
			res.send("1");
		}
	})

});
app.post("/dologin",function(req,res,next){
	var form = new formidable.IncomingForm();

	form.parse(req,function(err,fields,files){
		var username = fields.username;
		var mima = fields.mima;
		mima = md5(md5(mima).substr(4,7)+md5(mima));

		// 检索数据库，按登录名检索
		db.find("users",{"username":username},function(err,result){
			if(result.length == 0){
				res.end("-2");//-2没有这个人
				return;
			}
			var dbpasswork = result[0].mima;
			/*要对用户这次输入的密码，进行相同的加密操作，然后
			与数据库中的密码进行比对*/
			if(mima == dbpasswork){
				res.send("1");//success
			}else{
				res.send("-1");//密码比匹配
			}
		})
	});
	return;
})

app.listen(3000);