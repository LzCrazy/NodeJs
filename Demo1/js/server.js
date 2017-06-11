/**
 * Created by jalance on 2017/5/20.
 */
var http = require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.end("do you konw node.js\n");
}).listen(1223,"127.0.0.1");
console.log("server running at http://127.0.0.1:1223/");