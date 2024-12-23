// Вариант 2
function getCurrentDate(): void {
    console.log(new Date().toLocaleTimeString());
}

window.onload = () => {
    setTimeout(() => getCurrentDate(), 10000);
};