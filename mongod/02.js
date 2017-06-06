var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");

var app = express();
app.set("view engine","ejs");

var DataBaseUrl = "mongodb://localhost:27017/LzCrazy";

app.get("/",function(req,res){
	MongoClient.connect(DataBaseUrl,function(err,db){
		if(err){
			console.log("连接数据库失败");
			return;
		}
		console.log("连接数据库成功");
		// 查询数据库，cursor游标，遍历数据，每次表示一条document
		var result = [];
		var cursor = db.collection('student').find();
		cursor.each(function(err,doc){
			if(err){
				console.log("遍历数据失败");
				return;
			}
			if(doc != null){
				result.push(doc);
			}else{
				// console.log("遍历到的数据"+result.toString());
				db.close();
				res.render("index",{
					"result":result
				})
			}
		})
	})
});

app.get("/add",function(req,res){
	res.render("add");
})
app.get("/submit",function(req,res){
	var name = req.query.name;
	var age = req.query.age;
	var chinese = req.query.chinese;
	var math = req.query.math;

	MongoClient.connect(DataBaseUrl,function(err,db){
		if(err){
			console.log("连接数据库失败");
			return;
		}
		db.collection("student").insertOne({
			"name":name,
			"age":age,
			"score":{
				"math":math,
				"chinese":chinese
			}
		},function(err,result){
			if(err){
				console.log("写入失败");
				return;
			}
			res.send("写入成功");
			res.end();
			db.close();
		});
	})
})
app.listen(3000);