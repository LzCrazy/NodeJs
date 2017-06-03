/**
 * Created by jalance on 2017/6/3.
 */
var foo = require("./module/foo.js");
console.log(foo.msg);
console.log(foo.info);
foo.showInfo();

var Person = require("./module/Person.js");
var Lz = new Person("小明", "男", 21);
Lz.konw();
