### Mongoose
是一个将javascript对象，与数据库产生关系的框架，ORM(object related model)操作对象，就是操作数据库，对象产生了，同时也持久化了；

这个思路是java三大框架SSH中的的Hibernate框架思路，改变了使用数据库的方式.

#### 类
```
	function Student(){

}
```
#### 实例化一个学生
```
	var xiaoming = new Student();
	//实例方法，因为这个age方法的执行者是类的实例
	xiaoming.age();
```
#### 静态方法(类方法)
```
	//类方法，这个方法的执行者是这个类，不是这个类的实例
	Student.findAllAge();
```