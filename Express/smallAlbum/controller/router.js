/**
 * Created by jalance on 2017/6/4.
 */
var file = require("../models/file");
var formidable = require("formidable");
var path = require("path");
var fs = require("fs");
var sd = require("silly-datetime");


//首页
exports.showIndex = function (req,res,next) {
    /*res.render("index",{
        "albums":file.getAllAlbums()

    });*/
    /*node思维，所有的东西都是异步的，所以
    * 内层函数不是return回来的，而是调用
    * 高层函数提供的回调函数，把数据当作回调的
    * 参数使用*/
    file.getAllAlbums(function (err,allAlbums) {
        //err是字符串
        if(err) {
            // res.send(err);
            next();//交给适合的中间件
            return;
        }
        console.log(allAlbums);
        res.render("index", {
            "albums": allAlbums
        });
    })
};
//相册
exports.showAlbum = function (req, res,next) {
    //遍历相册中的相片
    var albumName = req.params.albumName;
    //具体业务在model中
    file.getAllImagesByAlbumName(albumName,function(err,imagesArray){
        if(err) {
            // res.render("err");
            next();
            return;
        }
    res.render("album", {
        "albumname": albumName,
        "images":imagesArray
    });

    });
};

//显示上传
exports.showUp = function(req,res){
    //命令file模块（我们自己写的函数）调用getAllAlbums函数
    //得到所有文件夹名字之后做的事情，写在回调函数里面
    file.getAllAlbums(function(err,albums){
        res.render("up",{
            albums : albums
        });
    });
};

//上传表单
exports.doPost = function (req, res) {
    var form = new formidable.IncomingForm();

    form.uploadDir = path.normalize(__dirname + "/../tempup/");
    form.parse(req, function (err, fields, files,next) {
        console.log(fields);
        console.log(files);
        //改名
        if(err) {
            next();
            return;
        }

        //判断文件大小
        var size = parseInt(files.tupian.size);
        if(size>1048) {
            res.send("图片应该>2M");
        //    删除我图片
            fs.unlink(files.tupian.path);
            return;
        }

        var ttt = sd.format(new Date(), 'YYYYMMDDHHmmss');
        var ran = parseInt(Math.random() * 89999 + 10000);
        var extname = path.extname(files.tupian.name);

        var wenjianjia = fields.wenjianjia;
        var oldpath = files.tupian.path ;
        var newpath = path.normalize(__dirname + "/../uploads/" + wenjianjia + "/" + ttt + ran + extname);
        fs.rename(oldpath,newpath,function(err){
            if(err){
                res.send("改名失败");
                return;
            }
            res.send("成功");
        });
    });
    return;
}