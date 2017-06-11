/**
 * Created by jalance on 2017/5/20.
 */
var student = require("./student");
var teacher = require("./teacher");

teacher.add("LzCrazy");
function add(teacherName,students) {
    teacher.add(teacherName);
    students.forEach(function (item, index) {
        student.add(item);
    });

}
exports.add=add