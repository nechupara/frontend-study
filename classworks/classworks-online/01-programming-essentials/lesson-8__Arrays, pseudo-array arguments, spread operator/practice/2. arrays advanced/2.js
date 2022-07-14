/**
 * Задача 2.
 *
 * Написать функцию-исследователь навыков разработчика developerSkillInspector.
 *
 * Функция не обладает аргументами и не возвращает значение.
 * Функция опрашивает пользователя до тех пор, пока не введёт хотя-бы один свой навык.
 *
 * Если пользователь кликает по кнопке «Отменить» в диалоговом окне, программа оканчивает
 * опрос и выводит введённые пользователем навыки в консоль.
 *
 *
 * Условия:
 * - Список навыков хранить в форме массива;
 * - В списке навыков можно хранить только строки длиной больше, чем один символ.
 */

const developerSkillInspector = () => {
	const skillsArray = [];
	let skills = null;

	while (skills !== null || skillsArray.length === 0) {
		skills = prompt("Enter your skills:");

		if ( skills !=='' && skills !== null && skills.length > 2 ){
			skillsArray.push(skills)
		}
	}

	console.log( skillsArray );

}

developerSkillInspector()