var ejs = require("ejs");
var fs = require("fs");
var http = require("http");


var server = http.createServer(function(req,res){
    fs.readFile("./views/index.ejs",function(err,data){
        //绑定模板
        var template = data.toString();
        var dictionary = {
            modules:"this is modules",
            news : [
                {"title":"one","count":10},
                {"title":"two","count":20},
                {"title":"three","count":30}
            ]
        };
        var html = ejs.render(template,dictionary);

        //显示
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end(html);
    });
});

server.listen(3000,"127.0.0.1");