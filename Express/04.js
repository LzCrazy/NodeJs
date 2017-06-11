/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");
var app = express();

app.get('/',function (req,res) {
    res.end("do you konw");
});
app.get('/students/:id', function (req, res) {
//    id可以是数组，数字，自字符串
    var id = req.params["id"];

    var reg = /^[/d]{6}$/;
    if(reg.test(id)){
        res.send(id);
    }else{
        res.send("检查格式");
    }

app.get("/:username/:oid",function(req,res){
    var username = req.params["username"];
    var oid = req.params["oid"];
    res.write(username);
    res.end(oid);
    });
});
app.listen(3000);