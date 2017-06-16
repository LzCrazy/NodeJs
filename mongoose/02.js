var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/LzCrazy");

var db = mongoose.connection;
db.once('open',function(callback){
	console.log("success");
})

var animaSchema = new mongoose.Schema({
	"name":String,
	"type":String
});
animaSchema.methods.zhaotonglei = function(callback){
	this.model("Animal").find({"type":this.type},callback);
}

var Animal = mongoose.model("Animal",animaSchema);

Animal.findOne({"name":"小白"},function(err,result){
	var dog = result;
	dog.zhaotonglei(function(err,result){
		console.log(result);
	})
})