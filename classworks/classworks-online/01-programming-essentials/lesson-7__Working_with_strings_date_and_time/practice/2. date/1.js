/**
 * Задание 1.
 *
 * Написать функцию, которая возвращает название дня недели (словом),
 * который был указанное количество дней назад.
 *
 * Функция обладает одним параметром:
 * - Число, которое описывает на сколько дней назад мы хотим вернуться, чтобы узнать желаемый день.
 *
 * Условия:
 * - Использование объекта Date обязательно.
 *
 * Заметка:
 * - Можно использовать готовый объект с днями недели.
 */

/* Дано */
const days = {
	0: 'Воскресенье',
	1: 'Понедельник',
	2: 'Вторник',
	3: 'Среда',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
};

const getDay = (num) => {
	let data = new Date();
	data.setDate(data.getDate() - num);
	let weekDay = data.getDay();
	return days[weekDay];
}

console.log(getDay(33));

