var mongoose = require("mongoose");
var db = require("./db.js");
var ObjectID = require("mongodb").ObjectID();

var bookSchema = new mongoose.Schema({
	name:{type:String},
	author:{type:String},
	price:{type:Number},
	type:{type:Array,"default":""}
});
// 给schema添加图书列表方法
bookSchema.statics.showbook = function(callback){
	this.model("Book").find({},callback);
}
// 给schem添加查找方法
bookSchema.statics.findbook = function(name,callback){
	this.model("Book").find({"name":name},callback);
}
var bookModel = db.model('Book',bookSchema);
module.exports = bookModel;