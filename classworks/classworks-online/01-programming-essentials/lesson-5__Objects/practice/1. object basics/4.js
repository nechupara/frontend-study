/**
 * Задание 4.
 *
 * С помощью цикла for...in вывести в консоль все свойства
 * первого уровня объекта в формате «ключ-значение».
 *
 * Продвинутая сложность:
 * Улучшить цикл так, чтобы он умел выводить свойства
 * объекта второго уровня вложенности.
 */

/* Дано */
const user = {
	firstName: 'Walter',
	lastName: 'White',
	job: 'Programmer',
	pets: {
		cat: 'Kitty',
		dog: 'Doggy',
	},
};

for (let key in user){
	if( typeof user[key]=== "object"){
		for (let key2 in user[key]){
			console.log(`LEVEL 2 - ${key2}: ${user[key][key2]}`);
		}
	} else{
		console.log(`LEVEL 1 - ${key}: ${user[key]}`);
	}
}
