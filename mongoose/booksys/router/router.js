var Book = require("../models/Book.js");

exports.addbook = function(req,res,next){
	res.render("addbook");
};
// 处理添加
exports.doadd = function(req,res,next){
	Book.create(req.query,function(err){
		if(err){
			res.send("失败");
		}
		res.send("成功");
		
	})
	// res.render("doadd");
}
exports.showIndex = function(req,res,next){
	Book.showbook(function(err,result){
		// console.log(result);
		res.render("index",{
			"tushu":result
		});
	})
}
// 添加修改显示
exports.edit = function(req,res,next){
	Book.findbook(req.query.name,function(err,result){
		console.log(result);
		res.render("edit",result[0]);
	})
}
// 修改处理
exports.doedit = function(req,res,next){
	Book.findbook(req.query.name,function(err,result){
		console.log(result);
		res.render("edit",result[0]);
	})
}