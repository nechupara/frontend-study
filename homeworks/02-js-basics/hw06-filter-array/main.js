/* 
ОТВЕТ НА ТЕОРЕТИЧЕСКИЙ ВОПРОС:
Метод (цикл) forEach "пробегат" по всем элементам массива. Для каждого элемента массива forEach 
запускает функцию-callback, в которую передаёт текущий элемент массива (и не только его), и в этой функции 
совершает заданные нами инструкции в теле этой функции.
*/

// const filterBy = (arrayToFilter, typeToDelete) => {
//     const resultArr = [];
//     if (typeToDelete === "null") {
//         arrayToFilter.forEach((element) => {
//             if (element !== null) resultArr.push(element);
//         });
//     } else {
//         arrayToFilter.forEach((element) => {
//             if (typeof element !== typeToDelete) resultArr.push(element);
//         });
//     }
//     return resultArr;
// };

const filterBy = (arrayToFilter, typeToDelete) => {
    if (typeToDelete === 'null') return arrayToFilter.filter(element => element !== null);
    return arrayToFilter.filter( element => typeof element !== typeToDelete || element === null);
}

const allTypes = [
    "null",
    "undefined",
    "number",
    "bigint",
    "boolean",
    "string",
    "symbol",
    "object",
    "function",
];
const testArray = [
    alert,
    undefined,
    "hello",
    "world",
    23,
    "23",
    null,
    1000n,
    { name: "John" },
    true,
    ,
    null,
    1000n,
    { name: "John" },
    true,
    ,
];

allTypes.forEach((type) => {
    console.log(type, filterBy(testArray, type));
});
