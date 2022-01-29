/**
 * Задача 1.
 *
 * Дан массив с днями недели.
 *
 * Вывести в консоль все дни недели с помощью:
 * - Классического цикла for;
 * - Цикла for...of;
 * - Специализированного метода для перебора элементов массива forEach.
 */


/* Дано */
const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',

];

// for ( i = 0; i < days.length; i++) {
//   console.log(days[i]);
//
// }
// for (const day of days) {
//   console.log(day);
//
// }
// days.forEach(element => console.log(element));

let data = new Date();
// console.log(data.getDay());
days.forEach((element,index) =>{ if(data.getDay()===index){console.log(element)}})