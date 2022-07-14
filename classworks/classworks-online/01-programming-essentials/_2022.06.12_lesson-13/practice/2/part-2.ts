/**
 * Задание 4.
 *
 * Улучшить скрипт из предыдущего задания.
 *
 * При каждом движении курсора по странице
 * менять цвет каждой буквы элемента h1 на случайный.
 */

/* Дано */
const PHRASE = 'Добро пожаловать!';

function getRandomColor() {
	const r = Math.floor( Math.random() * 255 );
	const g = Math.floor( Math.random() * 255 );
	const b = Math.floor( Math.random() * 255 );

	return `rgb(${ r }, ${ g }, ${ b })`;
}

