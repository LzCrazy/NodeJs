/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/",function (req,res) {
    res.render("01",{
        "news":[
            "this news",
            "this news",
            "this news"
        ]
    })
});
app.listen(3000);

/*
* 1.set(name,value)
* 设置键值对的引用
* */