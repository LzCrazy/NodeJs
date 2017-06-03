/**
 * Created by jalance on 2017/6/3.
 */

function Person(name,sex,age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}
Person.prototype= {
    konw: function () {
        console.log(this.name + this.sex + this.age);
    }
}
//person是构造函数，可以使用new
module.exports = Person;