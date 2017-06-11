/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");

var app = express();

app.get("/",function (req,res) {
    res.send("this is cut form");
});
app.get("/one",function (req,res) {
    res.send("this is One form");
});
app.get("/two",function (req,res) {
    res.send("this is Two form");
});

app.get(/^\/student\/([\d]{10})$/,function(req,res){
    res.send("学生信息，学号" + req.params[0]);
});

app.get("/teacher/:jobNumber",function(req,res){
    res.send("老师信息，工号" + req.params.jobNumber);
});
app.listen(3000);


/*
get请求
* 1.get(name)
* 返回name值，name值可以是正则表达式
*
*
* set('name","LzCrazy");
* get("name");==>LzCrazy
*
* 2.get(path,callback)
* HTTP GET请求路由到指定的路径与指定的回调函数；去访问path的路径
*
* post请求
*
* 访问任何method使用
*  app.all()方法
*
* */