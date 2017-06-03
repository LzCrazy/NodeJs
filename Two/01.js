/**
 * Created by jalance on 2017/6/3.
 */
var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require("path");

var server=http.createServer(function(req,res) {
    var pathname = url.parse(req.url).pathname;
    //判断是文件夹还是文件
    if(pathname.indexOf(".")==-1) {
        pathname += "/index.html";
    }
//     输入网址是localhost/images/logo.png
//     实际请求的是./static/images/logo.png
    var fileURL = "./" + path.normalize("./static/" + pathname);
    var extname = path.extname(pathname);

    //读取文件
    fs.readFile(fileURL,function (err,data) {
        if(err) {
            res.writeHead(404, {"Content-Type": "text/html;charset=UTF8"});
            res.end("404,页面没有找到");
        }
    //读取数据之后
        getMime(extname,function (mime) {
            res.writeHead(200, {"Content-Type": mime});
            res.end(data);
        })
    });
});
server.listen(4000, "localhost");
function getMime(extname,callback) {
    //读取json文件
    fs.readFile("./file/mime.json",function (err,data) {
        if(err) {
            throw Error("找不到文件");
            return;
        }
        var mimeJson = JSON.parse(data);
        var mime = mimeJson[extname] || 'text/plain';
        //执行回调函数，mime类型字符串，就是它的参数
        callback(mime);
    })

}
