/**
 * Created by jalance on 2017/6/4.
 */
var http = require("http");
var formidable = require("formidable");

var server = http.createServer(function (req, res) {
    if(req.url=="/dopost" && req.method.toLocaleLowerCase()=="post"){
        var form =new formidable.IncomingForm();
        //执行里面的回调函数时，表单已经全部接收完毕
        form.parse(req,function (err,fields,files) {
            console.log(files);
            console.log(fields);
            //所有的文本域，单选框，都放在fields存放
        //    所有的文件域，存放在files
            res.writeHead(200, {"Content-Type": 'text/plain'});
            res.end("成功");

        })

    }
});
server.listen(4000, "localhost");