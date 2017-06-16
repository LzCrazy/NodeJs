/**
 *
 * Created by jalance on 2017/6/15.
 */
var Student = require("./models/Student.js");

// var xiaoming = new Student({"name":"小明","age":12,"sex":"男"});
//
// xiaoming.save(function () {
// 	console.log("存储OK");
// });


//使用类创建对象
Student.create({"name": "三毛", "age": 13, "sex": "男"}, function (err) {
	console.log("保存成功");
});

Student.zhaoren("小明", function (err, resutl) {
	console.log(resutl);
});

Student.xiugai({"name": "小明"}, {$set: {"age": 30}}, {}, function () {
	console.log("修改年龄OK");

});


