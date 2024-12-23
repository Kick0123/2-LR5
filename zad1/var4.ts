// Вариант 4
const data: number[] = [];

const record = (param: number) => {
    console.log('Record: ' + param + ' added!');
    data.push(param);

    setTimeout(() => {
        const removed = data.shift();
        if (removed) {
            console.log('Record: ' + removed + ' removed!');
        }
    }, 10000);
};

function startRecording() {
    const interval = setInterval(() => {
        record(Math.floor(Math.random() * 1000));
    }, 10000);

    setTimeout(() => clearInterval(interval), 60000);
}

startRecording();
