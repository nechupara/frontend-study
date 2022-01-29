let count = 0;

debugger;

function invoke() {
    console.log(`level ${count}`);

    count = count + 1;

    debugger;

    if (count <= 5) {
        invoke();
    }
}

console.log('Рекурсия: старт.');
invoke();
console.log('Рекурсия: финиш.');
