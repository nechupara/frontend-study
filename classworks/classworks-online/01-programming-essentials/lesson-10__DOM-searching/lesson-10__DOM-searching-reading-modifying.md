# Document Object Model
_**Document Object Model**_, сокращённо DOM – объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.

Объект `document` – основная «входная точка». С его помощью мы можем что-то создавать или менять на странице. 

#### Что такое DOM дерево
Это соответствующим образом выстроенная структура объектов. Т.е. все то, что мы привыкли видеть в HTML как теги, теперь нам доступно в JavaScript в виде объектов. 

Каждый элемент имеет целый ряд свойств и методов, которые полностью описывают его.

### Как получить ДОМ элемент?
Для поиска элементов в ДОМ дереве, у объекта `document` есть основные методы:

* `getElementById()` - принимает в качестве аргумента значение атрибута id искомого HTML элемента. Возвращает объект ДОМ элемента.

* `getElementsByClassName()` - принимает в качестве аргумента значение атрибута class искомого HTML элемента. Если классов несколько, следует указать только один. Возвращает HTML-Collection - массивоподобная структура данных, где будут собраны все элементы с указанным классом.

* `getElementsByName()` - принимает в качестве аргумента значение атрибута name искомого HTML элемента. Возвращает HTML-Collection - массивоподобная структура данных, где будут собраны все элементы с указанным значением атрибута name.

* `getElementsByTagName()` - принимает в качестве аргумента название тега искомого HTML элемента. Возвращает HTML-Collection - массивоподобная структура данных, где будут собраны все элементы с указанным тегом.

* `querySelector()` - принимает в качестве аргумента CSS селектор для поиска нужного элемента. Возвращает один ДОМ элемент, первый, который был найден по указанному селектору.

* `querySelectorAll()` - принимает в качестве аргумента CSS селектор для поиска нужных элементов. Возвращает массивоподобную коллекцию NodeList, где будут собраны все элементы, которые соответствуют переданному селектору.

### Основные свойства ДОМ элемента

Сведения о **вложенных узлах** документа:
* `childNodes` - хранит коллекцию дочерних узлов (ДОМ элементы, комментарии, переносы строк и тд)
* `children` - хранит коллекцию дочерних ДОМ элементов первого порядка
* `firstChild` - ссылка на _узел_, который является первым дочерним
* `firstElementChild` - ссылка на _ДОМ элемент_, который является первым дочерним
* `lastChild` - ссылка на _узел_, который является последним дочерним
* `lastElementChild` - ссылка на _ДОМ элемент_, который является последним дочерним

**Соседние элементы:**
* `nextSibling` - ссылка на следующий сестринский _узел_.
* `nextElementSibling` - ссылка на следующий сестринский _ДОМ элемент_.
* `previousSibling` - ссылка на предыдущий сестринский _узел_. 
* `previousElementSibling` - ссылка на предыдущий сестринский _ДОМ элемент_. 


Для каждого HTML атрибута, который мы могли присвоить в разметке у ДОМ элемента есть одноименное свойство. Есть несколько исключений, но общее правило именно такое.

#### Работа со стилями:
Для работы со стилями можно использовать свойства `style`, `className`, `classList`. 

**style**
Отвечает за _inline styles_ элемента. То есть, если что-то было изменено при помощи этого свойства - на странице в разметке мы увидим это как стили в атрибуте `style` элемента.

На самом деле это не просто свойство. Оно хранит в себе `CSSStyleDeclaration` объект, в котором содержатся все возможные в CSS свойства. По этому мы можем переопределить любое из них.

**className**
Хранит в себе строчное значение атрибута `class` HTML элемента. Если элементу в разметке присвоено 2 класса, то обы они написанные через пробел попадут в строку в этом свойстве.

**classList**
Массивоподобная структура данных со своими методами. 

Каждый класс - отдельный элемент. Можно получать их отдельно по индексу.

Методы:
 * `add` - принимает в качестве аргумента название класса, который и будет добавлен элементу
 * `remove` - принимает в качестве аргумента название класса, который и будет удален у элемента
 * `replace` - принимает два аргумента. Класс, _который_ нужно заменить и класс, _на который_ нужно заменить
 * `toggle` - добавил класс, если его не было и удалит, если такой класс был

#### Текстовое содержимое
Есть несколько свойств, которые отвечают за текст, написанный внутри элемента. 

`innerHTML` - позволяет получить HTML-содержимое элемента в виде строки

`outerHTML` - все, что хранит innerHTML + сам элемент

`textContent` - текст внутри элемента за вычетом всех <тегов>
