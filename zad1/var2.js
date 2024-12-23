// Вариант 2
function getCurrentDate() {
    console.log(new Date().toLocaleTimeString());
}
window.onload = function () {
    setTimeout(function () { return getCurrentDate(); }, 10000);
};
