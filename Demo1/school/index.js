/**
 * Created by jalance on 2017/5/20.
 */
var kclass = require('./kclass');

exports.add = function (kclasses) {
    kclasses.forEach(function (item,index) {
        var _klass = item;
        var teacherName=item.teacherName;
        var students=item.students;

        kclass.add(teacherName,students)
    })
};