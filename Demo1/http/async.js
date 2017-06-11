/**
 * Created by jalance on 2017/5/25.
 */
/*
var i =0;
while(true) {
    i++;
}*/


var c=0;
function print() {
    console.log(c);

}
function  plus(callback) {
    setTimeout(function () {
    c += 1 ;
        callback();
    },1000);
}
plus(print);
