var express = require("express");
var app = express();
var db = require("./module/db.js");

app.get("/charu",function(req,res){
	db.insertOne("teachers",{"name":"konw"},function(err,result) {
		if(err){
			console.log("failed");
			return;
		}
		res.send("success");
	});
});

// 查找
app.get("/du",function(req,res){
	/*// 该页面接受一个page参数(分页)
	var page = parseInt(req.query.page);
	var a= [];
	db.find("student",{"score.math":{$gt:60}},function(err,result){
		for(var i=2*page;i<2*(page+1);i++){
			// res.json({"result":result});
			a.push(result[i]);
		}
		res.send(a);
	})*/
	var page = parseInt(req.query.page);
	//{“pageamount":2,"page":2}分页条件
	// db.find("student",{},{"pageamount":2,"page":2},function(err,result){
	db.find("student",{},{"pageamount":2,"page":page},function(err,result){
		if(err){
			console.log(err);
		}
		res.send(result);
	})


})
// 删除
app.get("/shan",function(req,res){
	var name = req.query.name;
	db.deleteMany("student",{"name":name},function(err,result){
		if(err){
			console.log(err);
		}
		console.log("删除成功");
		res.send(result);
	})
})

// 修改
app.get("/update",function(req,res){
	db.updateMany(
		"student",//集合名
		{
			"age":3//修改的数据
		},
		{
			$set:{name:"this"}//怎么修改
		},
		function(err,result){
			if(err){
				console.log(err);
			}
			res.send(result);
		}
		)
})



app.listen(3000);