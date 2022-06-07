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
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

for ( let i=0; i<days.length; i++) {
	console.log(days[i]);
}

for ( const element of days) {
	console.log(element);
}

days.forEach(item=> console.log(item))