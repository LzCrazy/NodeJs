var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/LzCrazy");

var db = mongoose.connection;
db.once('open',function(callback){
	console.log("数据库连接成功");
})

// 博客结构
var blogSchema = new mongoose.Schema({
	title:String,
	author:String,
	body:String,
	comments:[{body:String,date:Date}],
	date:{type:Date,default:Date.now},
	hidden:Boolean,
	meta:{
		votes:Number,
		favs:Number
	}
})
blogSchema.methods.showInfo = function(){
	console.log(this.title);
	console.log(this.author);
}
var Blog = mongoose.model("Blog",blogSchema);

var blog = new Blog({
	"title":"这是我的博客",
	"author":"LzCrazy"
});
blog.showInfo();