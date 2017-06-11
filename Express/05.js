/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/",function (req,res) {
    res.render("form");
});
app.post("/",function (req,res) {
    res.send("success");
});

app.listen(3000);

/*
* restful路由设计
* ／student
*
* get 读取信息
* add 添加信息
* delete 删除信息
*
* */