/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");

var app = express();

//当你不写路径的时候，实际上就相当于"/"，就是所有网址
app.use(function(req,res,next){
    console.log(new Date());
    next();
});

app.get("/main",function(req,res){
    console.log("这是主页");
    res.end("this is main form");
});

app.use("/admin",function(req,res){
    res.write(req.originalUrl + "\n");
    res.write(req.baseUrl + "\n");
    res.write(req.path + "\n");
    res.end("这是后台");
});

app.listen(3000);

/*
*   app.use也是一个中间件
*   "/"执行过之后，不会执行"／admin"这个请求;需要使用中间件next
*
*
*   当你不写路径的时候，实际上相当于"／"，就是所有网址
* */