/**
 * Spread syntax
 *
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * */

// let parts = ['shoulders', 'knees'];
// let lyrics = ['head', ...parts, 'and', 'toes'];
//
// console.log('lyrics', lyrics );

/**
 * Копирование массива
 * */
// let arr = [1, 2, 3];
// let arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
//
// console.log('arr2', arr2 );

/**
 * Лучший способ конкатенации массивов
 * Для конкатенации массива часто используется Array.concat:
 * */

// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // Append all items from arr2 onto arr1
// arr1 = arr1.concat(arr2);
// console.log( arr1 ); //[0, 1, 2,3, 4, 5]

/**
 * С использованием spread syntax:
 * */

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
// arr1 = [...arr2,...arr1]; //[3, 4, 5, 0, 1, 2]
arr1 = [...arr2, arr1[2], arr2[2],...arr1, true, {id: 1, test: 45}, [1,2,34,]]; //[3, 4, 5, 2, 5, 0, 1, 2]
// arr1.splice(3);  //[3, 4, 5]
arr1.splice(5);  //[3, 4, 5, 2, 5 ]
console.log( arr1 );