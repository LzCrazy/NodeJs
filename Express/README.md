### Express

该框架主要有四个大点

#### express

创建一个`Express`应用

```
	var express = require("express");
	var app =express();
```

#### 内置方法（static）

唯一的一个中间件，负责托管Express静态资源

```
	express.static(root,[options])
	
```

#### Application

#### Request

#### Response

#### Router


#### Demo

01:Express中路由的基本使用get

02:Express静态文件使用

03:Express与模版引擎的使用

04:正则表达式在get中的使用

05:路由使用

06:中间键

07:中间件的原理

08:文件的执行顺序
 
09:next的使用

10:render方法渲染视图

smailAlbums:实现一个文件管理系统，用于处理图片的上传存储

```
    Node中全是回调函数，所以我们自己封装的函数，里面如果有异步的方法，
    比如I/O，那么就要用回调函数的方法封装
    
    错误：
    res.render("index",{
        "name":student.getDetailById(123312).name
    });
    正确：
    studnet.getDetailById(123312,function(detail){
        res.render("index",{
            "name":detail.name
        });
    });
```

11:body-parse中间件，解决express中的post请求,因为post中没有（request，response）的方法；该框架的功能属性
- json 处理json字符串的请求响应事件
- raw 处理自定义类型的的请求响应事件
- text 处理文本类型的请求响应事件

12:前后端分析


#### 框架安装

`npm install body-parse express silly-datetime ejs`