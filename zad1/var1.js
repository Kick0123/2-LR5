// Вариант 1
function getCurrentDate() {
    console.log(new Date().toLocaleTimeString());
}
window.onload = function () {
    var interval = setInterval(function () { return getCurrentDate(); }, 5000);
    setTimeout(function () { return clearInterval(interval); }, 60000);
};
