var express = require("express");
//数据库引用
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

var app = express();

//数据库连接地址
var dataBaseUrl = "mongodb://localhost:27017/LzCrazy";

app.get("/",function(req,res){
	// 异步操作的数据库
	MongoClient.connect(dataBaseUrl,function(err,db){
		if(err){
		// 	res.send("数据库连接失败");
        console.log("数据库连接失败");
			return;
		}
		res.write("connect success!!!");
		db.collection("teachers").insertOne({"name":"贾老师"},function(err,result){
			if(err){
				// res.send("数据库写入数据失败");
          console.log("数据库写入数据失败");
				return;
			}
		// 	res.write("数据已经插入到数据库");
        console.log("数据已经插入数据库中");
			res.end();
			//关闭数据库
			db.close();
		});
	});
});
app.listen(3000);