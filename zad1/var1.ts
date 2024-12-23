// Вариант 1
function getCurrentDate(): void {
    console.log(new Date().toLocaleTimeString());
}

window.onload = () => {
    const interval = setInterval(() => getCurrentDate(), 5000);
    setTimeout(() => clearInterval(interval), 60000);
};


