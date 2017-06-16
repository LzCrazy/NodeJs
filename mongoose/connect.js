var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/LzCrazy');
// 模型
var Cat = mongoose.model('Cat', { name: String });


// 实例
var kitty = new Cat({ name: 'Zildjian' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('我是hello kitty');
  }
});