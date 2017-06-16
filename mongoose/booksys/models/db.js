var mongoose = require("mongoose");
var db = mongoose.createConnection('mongodb://localhost/booksys');

db.once('open',function(callback){
	console.log("数据库连接成功");
});
module.exports = db;