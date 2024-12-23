// Вариант 5
const data: number[] = [12, 23, 34, 45, 59, 42, 15, 78, 32, 1, 6, 8, 4, 9, 25, 74];

function removeOdds() {
    const removeNext = () => {
        const index = data.findIndex(num => num % 2 !== 0);
        if (index !== -1) {
            const removed = data.splice(index, 1)[0];
            console.log(`Removed odd number: ${removed}`);
            setTimeout(removeNext, 1000);
        }
    };

    removeNext();
}

removeOdds();
