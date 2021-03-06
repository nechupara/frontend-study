/**
 * Задача 2.
 *
 * Написать мульти-язычную программу-органайзер.
 *
 * Программа спрашивает у пользователя на каком языке он желает увидеть список дней недели.
 * После ввода пользователем желаемого языка программа выводит в консоль дни недели на указанном языке.
 *
 * Доступные языки (локали): ua, ru, en.
 *
 * Если введённая пользователем локаль не совпадает с доступными — программа переспрашивает его до тех пор,
 * пока доступная локаль не будет введена.
 *
 * Условия:
 * - Решение должно быть коротким, лаконичным и универсальным;
 * - Всячески использовать методы массива;
 * - Использование метода Object.keys() обязательно.
 */

/* Дано */
const days = {
	ua: [
		'Понеділок',
		'Вівторок',
		'Середа',
		'Четвер',
		'П’ятниця',
		'Субота',
		'Неділя',
	],
	ru: [
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
		'Воскресенье',
	],
	en: [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	],
};


function orgsizer( days ) {
	let keyValues = Object.keys( days )
	// console.log( keyValues );
	let leng = prompt( `Enter your leng: ${ keyValues }` )

	while ( !keyValues.includes( leng ) ) {
		leng = prompt( `Enter your leng again: ${ keyValues }` )
	}

	days[ leng ].forEach( day => {
		console.log( day )
	} );
}

orgsizer( days )