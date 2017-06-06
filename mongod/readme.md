### mongo

1.mongo的数据结构和mysql数据库结构的比较

![DataBaes](/img/mongo.png)

2.使用情况

- 数据模型比较简单；
- 需要灵活性更强的IT系统；
- 对数据库性能要求较高；
- 不需要高度的数据一致性；
- 对于给定key，比较容易映射复杂值的环境






### mongod的使用

mongo  使用数据库

mongod  开机

mongoimport 导入数据


- 命令行的使用

开机命令  mongod --dbpath=/data/db/  

--dbpath=/data/db/ 数据库文档的位置

##### mongo语法

列出所有数据库：show dbs

使用某个数据库：use 数据库名字

`如果想新建数据库，也是use。use一个不存的，就是新建`

查看当前所在的数据库：db

插入数据：db.user.insert({"name":"xiaoming","age":223,"sex":"nan"});

`user就是所谓的集合，集合中存储了很多的json，user是第一次使用，集合将自动创建`

如果真的想把这个数据库创建成功，那么必须插入一个数据。数据库中不能直接插入数据，只能
往集合(collections)中插入数据。不需要创建集合

删除数据库，删除当前所在的数据库：db.dropDatabase();

导入数据库：
```
	mongoimport --db test --collections restaurants --drop --file primer-dataset.json

	-db test 想往哪个数据库里面导入
	--collections restaurants 想往哪个集合中导入
	--drop 把集合清空
	--file primer-dataset.json 那个文件
```

##### 测试数据
```
	{"name":"小明","age":13,"hobby":["吃饭","睡觉"],"score":{"chinese":23,"math":99}}
	{"name":"小强","age":9,"hobby":["打豆豆","睡觉"],"score":{"chinese":25,"math":89}}
	{"name":"小红","age":14,"hobby":["吃饭","购物"],"score":{"chinese":66,"math":89}}
	{"name":"小刚","age":11,"hobby":["唱歌","睡觉"],"score":{"chinese":53,"math":88}}
```


查找数据，使用find(): db.restaurants.find();

```
	mongo的documents是以键值对的形式存在的(K,V)
	大于50：$gt:50
	与 ：db.restaurants.find({"score":90,"name":"xiaoming"});
	或 ：db.restaurants.find({$or:[{"age":5},{"age":11}]});
	查找完毕后，调用sort，表示升降排序

	查找所有：db.restaurants.find();
	查找小红：db.restaurants.find({"name":"小红"});
	查找所有数学成绩为88的人：db.restaurants.find("score.math":99);
	数学成绩大于50的人：db.restaurants.find("score.math":{$gt:50});
	数学成绩小于50的人：db.restaurants.find("score.math":{$lt:50});
	找年龄为9或11的人:db.restaurants.find({$or:[{"age":9},{"age":11}]});
	查找所有后，进行排序，按照语文成绩相同，按照年龄排：db.restaurants.find().sort({"score.chinese":-1,"age":1});

```

修改数据：db.restaurants.update();

```
	修改小明年龄为78:db.restaurants.update({"name":"小明"},{$set:{"age":78}});
	修改所有人的数学成绩为3:db.restaurants.update({},{$set:{"score.math":3}},{multi:true});
	修改整条数据：db.student.updata({"age":32},{"name":"小明"});
```

删除数据：db.restaurants.remove();

```
	删除一个数学成绩为23:  db.restaurants.remove({"score.math":23},{justOne:true});
	删除所有：  db.restaurants.remove({});
```

查找数据总数：db.restaurants.stats().count


#### 错误问题

```
方式一：
	1.查看进程
		ps aux | grep mongod

	2.结束进程
		sudo kill -9 pid

方式二：
	重启mongodb
		sudo service mongod restart
	


```
    查看mongod是否可用
	 which mongod

	1.创建数据库存储目录
		sudo  -p /data/db

	2.查看该目录下的内存空间
		df -lh

	3.在/data/db下启动数据库,设置端口号(默认为27017)
		mongod --dbpath=/data/db  --port=27017

	4.守护进程的方式启动，--fork(需要输入系统日志)
		mongod --dbpath=/data/db  --port=27017  --fork --syslog

	5.结束进程
		mongod  --shutdown
		kill pid(进程的端口号)

	6.指定日志的位置
		mongod --dbpath=/data/db --port=27017 --fork --logpath=/var/log/mongod.log

	7.查看日志文件
		tail -f /var/log/mongod.log

	8.查看数据库
		show  dbs

	9.添加数据
		db.users.inert({"username":'Sid'});

	10.查看集合
		show collections

	11.查看所有文档
		db.users.find()

	12.文档ID
		_id

	13.查看文档数量
		db.users.find()

	14.更新(条件,内容 ,配置)
		db.users.update({"nmatched":1,"nUperted":0,'nModified':1})

		修改(res)
		db.users.save()

	15.删除
		db.users.remove()

	16.删除全部
		db.users.drop()

	17.使用某个数据库
		use  数据库

	18.查看当前数据库
		db

	19.新建数据库
		use LzCrazy

```
##### Demo

01: 每次访问的时候，新增一条数据

02：数据库的插入数据

03: 把常用的增删该查，都封装为module




