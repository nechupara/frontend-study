# JavaScript
Это язык программирования. С его помощью создаются части интерфейса, с которыми пользователь может взаимодействовать.

### Как подключить JavaScript к html файлу?
За создание JavaScript внутри html файла отвечает тег `<script>`. Внутри него можно написать код, который будет работать. 

Сам этот тег можно разместить в двух местах:
* внутри тега `<head>` - но тогда код отработает **до появления элементов на странице**
* в теге `<body>` - в таком случае мы сами контролируем когда скрипт начнет работать.

**Общепринятым правилом является:** 

Подключать тег `<script>` в качестве последнего тега внутри `<body>`. Так мы обеспечиваем себе работу скрипта только после того, как все элементы на странице буду загружены. 

# Переменные
Переменная (variable) - это именованная ячейка памяти, в которой можно хранить любое значение. Проще всего понять переменную, если представить ее как "коробку" для данных, с уникальным именем. 

Для создания такой коробки в JavaScript используется следующая конструкция:

`ключевое слово` `имя переменной` = `значение, которое мы ей хотим присвоить`.

Всего есть три ключевых слова для создания переменных:
```js
var name = "Ivan"; // устаревший небезопасный вариант
let surname  = "Popov"; // новый безопасный вариант
const about = "Huge fan of rock music"; // новый безопасный вариант, но без возможности перезаписать потом значение переменной
```

### Почему `var` - плохо?
Потому что переменная, созданная с помощью этого ключевого слова будет доступна везде. Это значит, что в любом месте кода кто угодно может к переменной обратиться, и перезаписать ее значение. Представьте себе, если бы сумма покупок на сайте из 330 грн, по необъяснимой причине стала 15000 грн. Именно этого мы и хотим избежать.

По этому раньше, до появления `let` и `const`, приходилось следить еще и за тем, чтобы имена переменных не повторялись.

### Разница между `var` и `let`?
У каждой переменной в JavaScript есть своя **область видимости**.

* Область видимости переменных, созданных с `var` - глобальная. Это значит, что доступ к ним есть везде и всегда. Есть только одно маленькое ограничение - `var`созданный внутри функции, не будет доступен за ее пределами.

* Область видимости переменных, созданных с `let` - блок кода. Т.е. если создать переменную, используя `let` внутри любого блока кода, между парой `{` и `}`, то за пределами блока доступа к этой переменной не будет. Мы как-бы прячем ее в свой домик, куда никто не сможет лишний раз постучаться.

### Что тогда такое `const`?
Это тот же `let`, только ему нельзя заменить значение.

Для любой переменной в JS мы можем менять содержимое.

```js
let name = "Ivan";
name = "Not Ivan";
```
в итоге в переменную `name` будет записано `"Not Ivan""`.

Вот только если написать тот же код, но с использованием `const` - браузер выдаст ошибку. 

# Типы данных
Есть восемь основных типов данных в JavaScript:
1) **`Boolean`** - принимает значение либо `true`, либо `false`. Чаще всего используется для хранения значений в стиле "да/нет".

2) **`String`** - любой текст. Который нужно показать пользователю, или тот, что мы от него получили - все это строка. Объявлять строку можно при помощи любых кавычек.
    * одинарные - `'слово'`
    * двойные - `"слово"`
    * обратные - ``` `слово` ```. Имеют продвинутый функционал. при помощи `${что угодно}` мы можем подставлять в строку значения других переменных. 
    ```js 
   let name = "Karlos";
   let phrase = `Hello, ${name}`; // получится "Hello, Karlos" 
   ``` 

3) **`Number`** - для всех чисел в пределах от `-2^53` до `2^53` есть один численный тип данных.

4) **`BigInt`** - числа произвольной длинны. Все, что за пределами диапазона от `-2^53` до `2^53`. Чтобы создать одно из таких чисел, нужно дописать в конце `n`. 
     ```js
   let number = 14;
   let bigNumber = 837287238728728732872783827873287328713n;
    ```

5) **`Object`** - Все остальные типы называются «примитивными», потому что их значениями могут быть только простые значения (будь то строка или число, или что-то ещё). Объекты же используются для хранения коллекций данных или более сложных объектов. Мы разберёмся с ними позднее, после того, как узнаем больше о примитивах.

6) **`undefined`** - означает _«значение не было присвоено»_. Если объявить переменную, но не присвоить ей никакого значения - по умолчанию она будет хранить `udefined`. 

7) **`null`** - специальное значение, которое представляет собой «ничего», «пусто» или «значение неизвестно».

8) **`symbol`** -  используется для создания уникальных идентификаторов объектов. Мы упоминаем здесь о нём для полноты картины, изучим этот тип после объектов.
             
### Оператор `typeof`
Возвращает тип, переданного ему аргумента.

Есть два синтаксиса:

* Синтаксис оператора: `typeof x`
* Синтаксис функции: `typeof(x)`

Другими словами, он работает со скобками или без скобок. Результат одинаковый.

Вызов `typeof x` возвращает строку с именем типа.