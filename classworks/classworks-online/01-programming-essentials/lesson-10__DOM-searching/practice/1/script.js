/**
 * Задание 1.
 *
 * Получить и вывести в консоль следующие элементы страницы:
 * - По идентификатору (id): элемент с идентификатором list;
 * - По классу — элементы с классом list-item;
 * - По тэгу — элементы с тэгом li;
 * - По CSS селектору (один элемент) — третий li из всего списка;
 * - По CSS селектору (много элементов) — все доступные элементы li.
 *
 * Вывести в консоль и объяснить свойства элемента:
 * - innerText;
 * - innerHTML;
 * - outerHTML.
 */
const list = document.getElementById('list');
const listClassName = document.getElementsByClassName('list-item');
const listItem = document.getElementsByTagName("li");
const listThree = document.querySelector('#list li:nth-child(3)');
const listAllLi = document.querySelectorAll('li');
// for (const item of listAllLi){
//     console.log(item.innerHTML);
// }
listAllLi.forEach((item, index)=> {
	if (index === 2){
		item.innerHTML = 'kjerfjferj';
	}
});
// console.log(listThree.innerText);
// console.log(list.innerHTML);
// console.log(list.outerHTML);






