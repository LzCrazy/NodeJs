/**
 * Created by jalance on 2017/6/4.
 */
var ejs = require("ejs");

var string = "this is my ejs,<%= qu %>";

var data = {
    qu: "do you know"
};
var html = ejs.render(string, data);
console.log(html);
