/**
* `getElementById()` - принимает в качестве аргумента значение атрибута id искомого HTML элемента. Возвращает объект ДОМ элемента.

* `getElementsByClassName()` - принимает в качестве аргумента значение атрибута class искомого HTML элемента. Если классов несколько, следует указать только один. Возвращает HTML-Collection - массивоподобная структура данных, где будут собраны все элементы с указанным классом.

* `getElementsByName()` - принимает в качестве аргумента значение атрибута name искомого HTML элемента. Возвращает HTML-Collection - массивоподобная структура данных, где будут собраны все элементы с указанным значением атрибута name.

* `getElementsByTagName()` - принимает в качестве аргумента название тега искомого HTML элемента. Возвращает HTML-Collection - массивоподобная структура данных, где будут собраны все элементы с указанным тегом.

* `querySelector()` - принимает в качестве аргумента CSS селектор для поиска нужного элемента. Возвращает один ДОМ элемент, первый, который был найден по указанному селектору.

* `querySelectorAll()` - принимает в качестве аргумента CSS селектор для поиска нужных элементов. Возвращает массивоподобную коллекцию NodeList, где будут собраны все элементы, которые соответствуют переданному селектору.
* */

let getElementById = document.getElementById('header'); // элемент + вложеность
// let getElementsByClassName = document.getElementsByClassName('section-featured'); // коллекция []
let getElementsByClassName = document.getElementsByClassName('container'); // коллекция [] [section.images-section-secret.container, section.images-section-secret.container.sdfdsf.container]
let getElementsByName = document.getElementsByName('user-name'); // коллекция []
let getElementsByTagName = document.getElementsByTagName('header'); // коллекция []
let querySelector = document.querySelector('.container'); // первый встречный элемент
let querySelectorAll = document.querySelectorAll('.image-item'); // коллекция []

// console.log( getElementById );
// console.log( getElementsByClassName );
// console.log( getElementsByName );
// console.log( getElementsByTagName );
// console.log( querySelector );
// console.log( querySelectorAll );


/**
Сведения о вложенных узлах документа:

* `childNodes` - хранит коллекцию дочерних узлов (ДОМ элементы, комментарии, переносы строк и тд)
* `children` - хранит коллекцию дочерних ДОМ элементов первого порядка
* `firstChild` - ссылка на _узел_, который является первым дочерним
* `firstElementChild` - ссылка на _ДОМ элемент_, который является первым дочерним
* `lastChild` - ссылка на _узел_, который является последним дочерним
* `lastElementChild` - ссылка на _ДОМ элемент_, который является последним дочерним

Соседние элементы

* `nextSibling` - ссылка на следующий сестринский _узел_.
* `nextElementSibling` - ссылка на следующий сестринский _ДОМ элемент_.
* `previousSibling` - ссылка на предыдущий сестринский _узел_.
* `previousElementSibling` - ссылка на предыдущий сестринский _ДОМ элемент_.
*/

let imagesSectionSecret = document.querySelector('.images-section-secret');
let imageItems = imagesSectionSecret.querySelector('.image-item');
// let imageItemsWrap = document.querySelector('.images-section-secret .image-item');

// console.log( imageItems );
// console.log( imageItemsWrap );
// console.log( imageItems.childNodes ); // список того что входит в селектор
// console.log( imageItems.children ); // надет чилдрены в селекторе вложенные теги
// console.log( imageItems.firstChild ); // первый потомок node text
// console.log( imageItems.firstElementChild ); // надет первый чилдрен в селекторе teg
// console.log( imageItems.lastChild ); // последний потомок node
// console.log( imageItems.lastElementChild );// надет последний чилдрен в селекторе

/**
#### Работа со стилями:

**style** Отвечает за _inline styles_ элемента. То есть, если что-то было изменено при помощи этого свойства - на странице в разметке мы увидим это как стили в атрибуте `style` элемента.
**className** Хранит в себе строчное значение атрибута `class` HTML элемента.
**classList**
	Методы:

* `add` - принимает в качестве аргумента название класса, который и будет добавлен элементу
* `remove` - принимает в качестве аргумента название класса, который и будет удален у элемента
* `replace` - принимает два аргумента. Класс, _который_ нужно заменить и класс, _на который_ нужно заменить
* `toggle` - добавил класс
* `contains` – проверка наличия класса, возвращает true/false.

 */
let headerTitle = imagesSectionSecret.querySelector('.header-title');

// style
/**
background-color  => elem.style.backgroundColor
z-index           => elem.style.zIndex
border-left-width => elem.style.borderLeftWidth
 */
// console.log( headerTitle );
// headerTitle.style.backgroundColor = '#000';
//
// console.log('className', headerTitle.className ); /// Формат string
//
//
// console.log('classList', headerTitle.classList ); /// формат коллекция []
//
// headerTitle.classList.add('test');
// headerTitle.classList.remove('headerTitle');
// headerTitle.classList.replace('test', 'updated');
// console.log( headerTitle.classList.contains( "headerTitle" ) ); //есть ли у нас класс //false
// headerTitle.classList.toggle('updatedToggle');
// headerTitle.addEventListener( "click" , () => headerTitle.classList.toggle('updatedToggle'));


// Текстовое содержимое
/**
`innerHTML` - позволяет получить HTML-содержимое элемента в виде строки
`outerHTML` - все, что хранит innerHTML + сам элемент
`textContent` - текст внутри элемента за вычетом всех <тегов>
* */

// console.log('innerHTML', headerTitle.innerHTML );
// headerTitle.innerHTML = 'test';
// headerTitle.innerHTML = '<strong>test</strong>';
// console.log('innerHTML', headerTitle.innerHTML );
//
// console.log( headerTitle.outerHTML );
//
// console.log('textContent', headerTitle.textContent );
// headerTitle.textContent = 'textContent';
// headerTitle.textContent = '<strong>test</strong>';
// console.log('textContent', headerTitle.textContent );