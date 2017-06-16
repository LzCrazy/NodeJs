var mongoose = require('mongoose');
var db = require("./db.js");

//创建了一个schema结构。
var studentSchema = new mongoose.Schema({
    name     :  {type : String},
    age      :  {type : Number},
    sex      :  {type : String}
});
//创建静态方法
studentSchema.statics.zhaoren = function(name,callback){
    this.model("Student").find({name: name}, callback);
}

//修改静态方法
studentSchema.statics.xiugai = function (conditions,update,options,callback) {
    this.model("Student").update(conditions, update, options, callback);
}
// 学生类
var studentModel = db.model('Student',studentSchema);

module.exports = studentModel;
