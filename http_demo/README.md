### 登陆demo

用于描述http的概念和基础

####HTTP概念

请求

GET / HTTP/1.1

GET 表示请求提交的方法，常见的有GET、POST两种

- / 表示请求的资源路径，当前为根路径
- HTTP/1.1 表示浏览器支持的协议版本，有1.1和1.0两种版本

Host: localhost

请求的主机

```Content-Type: application/json```

请求体的格式类型

GET请求没有请求体

```
POST 请求体格式与Content-Type有关，
常见值有application/x-www-form-urlencoded
     application/json, application/xml
     multipart/form-data
```

响应
- HTTP/1.1 200 ok

HTTP/1.1 表示服务器支持的协议版本
200 表示响应状态码，200表示成功
其它常见状态码 
```
301，302 重定向 ，后面会跟一个Location头，指明跳转位置
304 从浏览器缓存加载
403 权限不够，拒绝访问
404 资源未找到
500 服务器内部错误，通常是后端程序发生的错误
```

Content-Type: text/html, image/png, application/json 等等,表明返回类型
Content-length: 响应Body长度

发生重定向时包含的头，这时候一般没有Body
Location: http://localhost/other/resource