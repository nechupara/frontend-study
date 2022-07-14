/**
 * Задание 4.
 *
 * Получить элемент с классом .list-item.
 * Отобрать элемент с контентом: «Item 5».
 *
 * Заменить текстовое содержимое этого элемента на ссылку, указанную в секции «дано».
 *
 * Сделать это так, чтобы новый элемент в разметке не был создан.
 *
 * Затем отобрать элемент с контентом: «Item 6».
 * Заменить содержимое этого элемента на такую-же ссылку.
 *
 * Сделать это так, чтобы в разметке был создан новый элемент.
 *
 * Условия:
 * - Обязательно использовать метод для перебора;
 * - Объяснить разницу между типом коллекций: Array и NodeList.
 */

/* Дано */
const targetElement =
	'<a href="https://www.google.com" target="_blank" rel="noreferrer noopener">Google it!</a>';

const listItem = document.getElementsByClassName( 'list-item' );
for ( let listItemElement of listItem ) {

	if ( listItemElement.innerText === 'Item 5' ) {
		listItemElement.innerText = targetElement;
	} else if ( listItemElement.innerText === 'Item 6' ) {
		listItemElement.innerHTML = targetElement;
	}

}