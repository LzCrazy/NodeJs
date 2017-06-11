/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");
var fs = require("fs");
var app = express();

app.use(one);

app.get('/admin',function (req,res) {
    res.send("admin");
})

function one(req,res,next) {
    var filepath = req.originalUrl;
    console.log(filepath);
    /*
    * 根据当前网址，读取public文件夹中的文件，
    * 如果有这文件，那么渲染文件，没有就next()
    * */
    fs.readFile("./public"+filepath,function (err,data) {
        console.log(data);
        if(err) {
            next();
            return
        }

        res.send(data.toString());
        res.end("ths");
    });

}

app.listen(3000);