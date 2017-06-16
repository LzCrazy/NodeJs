var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LzCrazy');

var Cat = mongoose.model('Cat', { name: String,age:Number,sex:String});

var kitty = new Cat({ name: '汤姆',"sex":"公猫" });

kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('this is mowo');
  }
});

// 找到汤姆，修改年龄
Cat.find({"name":"汤姆"},function(err,result){
	var xiaomiao=result[0];
	xiaomiao.age=9;
	xiaomiao.save();
})