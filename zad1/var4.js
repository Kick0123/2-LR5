// Вариант 4
var data = [];
var record = function (param) {
    console.log('Record: ' + param + ' added!');
    data.push(param);
    setTimeout(function () {
        var removed = data.shift();
        if (removed) {
            console.log('Record: ' + removed + ' removed!');
        }
    }, 10000);
};
function startRecording() {
    var interval = setInterval(function () {
        record(Math.floor(Math.random() * 1000));
    }, 10000);
    setTimeout(function () { return clearInterval(interval); }, 60000);
}
startRecording();
