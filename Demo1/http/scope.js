/**
 * Created by jalance on 2017/5/25.
 */
var globalVariable = "this si gobal avriable";

function globalFunction() {
    var localVariable = "this is  local variable";
    console.log("visiti global/local variable");
    console.log("globalVariable");
    console.log('localVariable');

    globalVariable = "this is change variable";
    console.log(globalVariable);
}
globalFunction();