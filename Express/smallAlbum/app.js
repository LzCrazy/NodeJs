/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");
var router = require('./controller/router');
var app = express();


app.set("view engine", "ejs");
//静态页面
app.use(express.static('./public'));
app.use(express.static("./uploads"));

//首页
app.get("/", router.showIndex);
app.get("/:albumName", router.showAlbum);
app.get("/up", router.showUp);
app.post("/up", router.doPost);

//最后的中间件
app.use(function (req,res) {
    res.render("err");

});

app.listen(3000);