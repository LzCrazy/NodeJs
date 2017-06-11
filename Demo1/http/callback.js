/**
 *
 * Created by jalance on 2017/5/25.
 */
function learn(something) {
    console.log(something);
}
function  we(callback,something) {
    something += 'is cool';
    callback(something);
}
we(learn, "node.js");
