### Nodejs架构小demo

1.框架express

实现静态页面的现实

```
	var express = require('express')
	var app = express()
	app.use(express.static(__dirname+'/public'))
```

2.中间件body-parse

实现字符串的解析和json数据的解析

```
	var bodyParse =  require('body-parser')
	app.use(bodyParse.json())
	app.use(bodyParse.urlencoded({
		extented:false
	}))
```

3.demo运行

- 安装 express，bodyparser : npm install express  body-parser

- 运行 node app.js

- 效果演示  127.0.0.1:8089／test.html
