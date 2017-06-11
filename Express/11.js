/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set('view engine', "ejs");
app.get('/', function (req, res) {
    res.render("form");
});
app.use(bodyParser.urlencoded({ extended: false }));

console.log(bodyParser.urlencoded);
console.log(bodyParser.raw.toString())

app.post("/", function (req, res) {
    console.log(req.body);

});
app.listen(3000);