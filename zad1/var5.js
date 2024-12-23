// Вариант 5
var data = [12, 23, 34, 45, 59, 42, 15, 78, 32, 1, 6, 8, 4, 9, 25, 74];
function removeOdds() {
    var removeNext = function () {
        var index = data.findIndex(function (num) { return num % 2 !== 0; });
        if (index !== -1) {
            var removed = data.splice(index, 1)[0];
            console.log("Removed odd number: ".concat(removed));
            setTimeout(removeNext, 1000);
        }
    };
    removeNext();
}
removeOdds();
