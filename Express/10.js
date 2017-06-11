/**
 *
 * Created by jalance on 2017/6/4.
 */

var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/",function (req,res) {
    res.render("form", {news: []});
});
app.listen(3000);