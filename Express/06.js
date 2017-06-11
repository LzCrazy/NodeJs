/**
 * Created by jalance on 2017/6/4.
 */
var http = require("http");

//该语句只在打开服务器时执行，每次用户访问不执行该语句
var a = 100;

var server = http.createServer(function (req, res) {
    a++;
    res.end(a.toString());
});
server.listen(3000, "localhost");