// Вариант 3
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
record('example');
