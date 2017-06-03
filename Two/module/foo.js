/**
 * Created by jalance on 2017/6/3.
 */
var bar = require("./bar.js");
var msg = "message";
var info = "你该知道的信息";

function showInfo() {
    console.log(info);
}
exports.msg=msg;
exports.info = info;
exports.showInfo = showInfo;