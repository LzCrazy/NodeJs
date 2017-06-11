/**
 * Created by jalance on 2017/6/4.
 */
var express = require("express");
var app = express();

app.use(express.static("./public/"));
app.listen(3000);