/**
 * Created by jalance on 2017/6/5.
 */
var express = require("express");
var app = express();
app.locals.title = "localtitle";
console.log(app.locals.title);

var admin = express();

admin.on('mount', function (parent) {
    console.log('Admin Mounted');
    console.log(parent); // refers to the parent app
});

admin.get('/', function (req, res) {
    res.send('Admin Homepage');
});

app.use('/admin', admin);

app.listen(3000);