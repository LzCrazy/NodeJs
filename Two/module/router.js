/**
 * Created by jalance on 2017/6/4.
 */
function showIndex(req,res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF8"});
    res.end("首页");

}
function showStudent(req,res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF8"});
    res.end("学生页面");

}
function show404(req,res) {
    res.writeHead(404, {"Content-Type": "text/html;charset=UTF8"});
    res.end("404");
}

exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;