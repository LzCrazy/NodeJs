/**
 * Created by jalance on 2017/5/25.
 */
function clickIt(e) {
    window.alert("button is  clicked");
}
var button = document.getElementById('#btn');
button.addEventListener('click', clickIt);