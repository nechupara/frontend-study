// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// const result = fruitBasket.reduce((acc, el, index, arr) => {
//     if (acc[el]) {
//         acc[el] += 1;
//     } else {
//         acc[el] = 1;
//     }
//     return acc
// }, {});

// console.log(result);

const data = [
    {a: 'happy', b: 'robin', c: ['blue','green']},
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
    {a: 'sad', b: 'goldfish', c: ['green','red']}
  ];


const result = data.reduce((acc, el, index, arr) => {
    acc.push(...el.c);
    return acc;
}, []);

console.log(result);