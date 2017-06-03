/**
 * Created by jalance on 2017/6/4.
 */
var http = require("http");
var router = require("./module/router");

var server = http.createServer(function (req, res) {
    if(req.url == "/"){
        router.showIndex(req, res);
    }else if(req.url.substr(0,9)=="/student/"){
        router.showStudent(req,res);
    }else{
        router.show404(req, res);
    }
});
server.listen(4000, "localhost");