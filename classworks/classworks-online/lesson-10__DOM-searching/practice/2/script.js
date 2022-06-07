/**
 * Задание 2.

 * Получить элемент с классом .remove.
 * Заменить CSS-класс .bigger на CSS-класс .active.
 *
 * Условия:
 * - Вторую часть задания решить в двух вариантах: в одну строку и в две строки.
 */


const elem = document.querySelector('.remove');
console.log(elem);

/*const listItem = document.querySelectorAll('.list-item');
console.log(listItem);

listItem.forEach((value) => {
    if (value.classList.contains('bigger')) {
        value.classList.replace('bigger', 'active');
    }
})*/

const listItem = document.getElementsByClassName('list-item');

for (let listItemElement of listItem) {
	console.log(listItemElement);
	if (listItemElement.classList.contains('bigger')) {
		listItemElement.classList.replace('bigger', 'active');
	}
}


/*console.log(biggerElem);
biggerElem.classList.remove('bigger');

biggerElem.classList.add('active');
console.log(biggerElem);*/

/*biggerElem.classList.replace('bigger', 'active');

console.log(biggerElem);*/