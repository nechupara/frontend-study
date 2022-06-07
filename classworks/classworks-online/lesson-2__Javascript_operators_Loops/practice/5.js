/**
 * Задание 5.
 *
 * С помощью цикла вывести в консоль первые все нечётные числа,
 * которые находятся в диапазоне от 0 до 300.
 *
 * Заметка:
 * Чётное число — это число, которое делится на два.
 * Нечётное число — это число, которое не делится на два.
 *
 * Продвинутая сложность:
 * Не выводить в консоль числа, которые делятся на 5.
 */

for ( let i = 0; i <= 300; i++ ) {
	if ( i % 2 !== 0 && i % 5 !== 0 ) {
		console.log( i );
	}
}
