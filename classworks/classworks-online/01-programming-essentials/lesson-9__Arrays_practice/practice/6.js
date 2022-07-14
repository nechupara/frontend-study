/**
 * Задача 6.
 *
 * Описание задачи: Напишите функцию, которая очищает массив от нежелательных значений,
 * таких как false, undefined, пустые строки, ноль, null.
 */

let shitValues = [null, false, undefined, "", 0]
let initialArray = ['Good for you', null, false, undefined, "", 0, 1, 3, "erfger", {}, 'Vova', "Iarosh"]

const cleanArray = (arr, exclude) => arr.filter((elem) =>  !exclude.includes(elem))



console.log(cleanArray(initialArray, shitValues))