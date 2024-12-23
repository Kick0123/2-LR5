// Вариант 3
const data: string[] = [];

const record = (param: string) => {
    console.log('Record: ' + param + ' added!');
    data.push(param);

    setTimeout(() => {
        const removed = data.shift();
        if (removed) {
            console.log('Record: ' + removed + ' removed!');
        }
    }, 10000);
};

record('example');
