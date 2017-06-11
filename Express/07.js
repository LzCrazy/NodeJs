/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");
var app =express();

app.get('/:username/:id', function (req, res) {
    console.log(1);
    res.send("用户信息" + req.params.username);
});
app.get("/admin/login",function (req,res) {
    console.log(2);
    res.send("登陆");
});

app.listen(3000);