# Document Object Model
Помимо работы с существующими элементами на странице, можно так же создавать свои, тслизовать их и размещать на странице в нужное место.

### Создание DOM элементов
Создание делитсяна два типа - ДОМ элементы и текстовые ноды. Текстовая нода может быть полезна, когда нужно просто вставить определенный текст в элемент без создания чего либо другого. Тогда в целевой элемент просто будет помещен тот текст, который мы создали. С ДОМ элементами все так же - после создания можно их размещать буквально в любом месте документа.

**Методы создания**
* `documetn.createElement(tagName)` - создает объектное представление нового ДОМ элемента, где tagName это имя тега элемента, который мы хотим создать.
* `documetn.createTextNode(text)` - создает объектное представление нового ДОМ элемента, где text это любой текст.

**Методы вставки**
`element` - любой ДОМ элемент, в который мы хотим вставить child
`child` - новосозданный элемент

Всем перечисленным методам можно через запятую передавать в качестве аргумента любое количество элементов - все они буду вставлены на страницу согласно правилу.

* `element.append(child)` - вставит child после последнего дочернего элемента внутри element.
* `element.prepend(child)` - вставит child перед первым дочерним эоементом внутри element.
* `element.before(child)` - вставит child перед самим element в разметке так, что они станут сестринскими.
* `element.after(child)` - вставит child после element в разметке так, что они станут сестринскими.
* `element.replaceWith(child)` - вставит child вместо element.

#### insertAdjacentHTML
Это универсальный способ вставить элемент на страницу, если он представлен в виде готовой HTML строки.

**Синтаксис:**
`elem.insinsertAdjacentHTML(place, HTMLstring)`

* `elem` - ДОМ элемент, в который нужно осуществить вставку

* `page` - одно из 4 ключевых слов:
    * "beforebegin" – вставить html непосредственно перед elem,
    * "afterbegin" – вставить html в начало elem,
    * "beforeend" – вставить html в конец elem,
    * "afterend" – вставить html непосредственно после elem.

* `HTMLstring` - HTML-строка, которая будет вставлена именно «как HTML»

### Удаление узлов
Для удаления элемента со страницы можно вызвать его метод `remove()`. Элемент будет удален из разметки.

### Клонирование узлов
`elem.cloneNode(true)` - создаёт «глубокий» клон элемента – со всеми атрибутами и дочерними элементами.

`elem.cloneNode(false)` - тогда клон будет без дочерних элементов.

### DocumentFragment
DocumentFragment является специальным DOM-узлом, который служит обёрткой для передачи списков узлов.
Мы можем добавить к нему другие узлы, но когда мы вставляем его куда-то, он «исчезает», вместо него вставляется его содержимое.

```js
let fragment = new DocumentFragment(); //создаем новую обертку

for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li); // добавляем дочерние элементы
}

document.body.append(fragment) // добавляем обертку на страницу
```
После выполнения этого кода все дочерние элементы обертки будут доьбавлены на страницу, а сама обертка - нет.