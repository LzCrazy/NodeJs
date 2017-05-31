### NodeJs

1.安装node.js

偶数位数为稳定版本，奇数位数的为非稳定版

首先安装的是git,具体安装可以查看官网

搭建一node.js的服务器
```
    var http = require('http');
    http.createServer(function (req,res) {
        res.writeHead(200,{'Content-Type':"text/plain"});
        res.end("do you konw node.js\n");
    }).listen(1223,"127.0.0.1");
    console.log("server running at http://127.0.0.1:1223/");

```
模块的分类

- 核心模块 http fs path...
- 文件模块 var uitl=require('./util.js');
- 第三方模块 var promimse=require('buildbird');

模块的流程
- 创建模块
- 导出模块
- 加载模块
- 使用模块

HTTP 
- http客户端发起请求，创建端口
- http服务端在端口监听客户端请求
- http服务器向客户端返回状态和内容

请求方法
- GET POST PUT DELETE HEAD TRACE OPTIONS

- http.request(options[,callback]);

HTTP源码解读
- 

chrome搜索
- chrome搜索自身的DNS缓存
- 搜索操作系统自身的DNS缓存（浏览器没有找到缓存或缓存已经失效）
- 读取本地的Host文件
- 浏览器发起一个DNS的一个系统调用
- 浏览器获得域名对应的IP地址后，发起http"三次握手"

2.Node.js API 


3.Node.js搭建应用
