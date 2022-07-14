/**
 * Задание 2.
 *
 * Написать программу, которая будет приветствовать пользователя.
 * Сперва пользователь вводит своё имя, после чего программа выводит в консоль сообщение с учётом его должности.
 *
 * Список должностей:
 * Mike — CEO;
 * Jane — CTO;
 * Walter — программист:
 * Oliver — менеджер;
 * John — уборщик.
 *
 * Если введёно не известное программе имя — вывести в консоль сообщение «Пользователь не найден.».
 *
 * Выполнить задачу в двух вариантах:
 * - используя конструкцию if/else if/else;
 * - используя конструкцию switch.
 */
let userName = prompt('John, Mike, Jane, Walter, Oliver')
let updatedUserName = userName.toLowerCase(); // Для того что бы не зависеть от регистра.

// if (updatedUserName === 'john') {
//     alert('You are cleaner');
// } else if (updatedUserName === 'mike') {
//     alert('CEO');
// } else if (updatedUserName === 'jane') {
//     alert('CTO');
// } else if (updatedUserName === 'walter') {
//     alert('Developer');
// }else if (updatedUserName === 'oliver') {
//     alert('Manager');
// } else {
//     alert('Not found!!!');
// }

switch (updatedUserName) {
	case 'john' :
		alert('You are cleaner');
		break;
	case 'mike' :
		alert('You are CEO');
		break;
	case 'jane' :
		alert('You are CTO');
		break;
	case 'oliver' :
		alert('You are manager');
		break;
	case 'walter' :
		alert('You are Developer');
		break;
	default :
		alert('Not found!!!');
}