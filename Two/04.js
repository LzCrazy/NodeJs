/**
 * Created by jalance on 2017/6/4.
 */
var http = require("http");
var querystring = require("querystring");

var server=http.createServer(function (req,res) {
    if(req.url=="/dopost" && req.method.toLocaleLowerCase()=="post"){
        var alldata = "";
        req.addListener('data',function (chunk) {
            alldata += chunk;
        })
        //接收完毕
        req.addListener("end",function () {
            var datastring = alldata.toString();
            res.end("success");
            var dataObj = querystring.parse(datastring);
            console.log(dataObj);
            console.log(dataObj.name);
            console.log(dataObj.sex);
        })
    }
});
server.listen(4000, "localhost");