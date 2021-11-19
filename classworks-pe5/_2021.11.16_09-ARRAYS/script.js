const arr = [];

for (let i = 1; i <= 100; i++) {
    arr.push(i);
}

const filteredArr = arr.filter(e => {
    if (e > 50 && e < 70) return e;

})

console.log(filteredArr);