/**
 * Задача 3.
 *
 * Улучшить функцию-исследователь навыков разработчика из предыдущего задания.
 *
 * После ведения пользователем своих навыков функция выводит их на экран посредством функции alert.
 * После чего спрашивает правильно-ли пользователь ввёл данные о своих навыках.
 *
 * --- Если пользователь ответил «нет» ---
 * Программа спрашивает его какие навыки необходимо удалить из списка.
 * Если пользователь ввёл навык для удаления из списка, которого в списке не существует, программа
 * оповещает пользователя об ошибке и повторно запрашивает данные.
 *
 * Программа запрашивает данные о навыках для удаления из списка до тех пор,
 * пока пользователь не кликнет по кнопке «Отменить» в диалоговом окне.
 *
 * --- Если пользователь ответил «да» ---
 * Программа выводит данные о навыках в консоль.
 */


const developerSkillInspector = () => {
	let skill = null;
	let skills = [];

	while (skill !== null || skills.length === 0) {
		skill = prompt('Введите навык, которым вы обладаете.');

		if (typeof skill === 'string' && skill.length !== 0) {
			skills.push(skill);
		}
	}

	alert(`Ваши навыки: ${skills}`);

	const isSkillsAreValid = confirm('Данные введены верно?');
	let skillToRemove = '';

	if (!isSkillsAreValid) {
		while (skillToRemove !== null) {
			skillToRemove = prompt(`Введите навык для удаления из списка: ${skills}`);

			while (!skills.includes(skillToRemove) && skillToRemove !== null) {
				skillToRemove = prompt(
					`Такого навыка в списке нет. Попробуйте ещё раз. Доступные навыки для удаления: ${skills}`,
				);
			}

			skills = skills.filter(skill => skill !== skillToRemove);
		}
	}

	console.log(skills);
};

developerSkillInspector();
