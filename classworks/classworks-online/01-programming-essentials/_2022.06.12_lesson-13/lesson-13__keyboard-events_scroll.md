# События в JavaScript
Жизненный цикл HTML документа плотно наполнен разными событиями. Они призваны выступать некими маркерами что что-то случилось и дают нам возможность встроить свою логику после того как что-то произошло на странице.

Причиной, возбудителем события может выступать загрузка страницы и ее этапы, клик по любой клавише мышки, нажатие клавиши на клавиатуре и прочее.

## События жизненного цикла HTML-страницы:

#### `document.DOMContentLoaded`
Запустится, когда документ загрузится, так будут доступны все элементы, включая <img>. Но сами изображения еще не будет загружены. Так же не будет загружены внешние таблицы стилей.

#### `window.onload`
Наступает, когда загрузилась вся страница, включая стили, картинки и другие ресурсы.

#### `window.onunload`
генерируется в момент, когда пользователь покидает страницу.

В этот момент стоит совершать простые действия, не требующие много времени, вроде закрытия связанных всплывающих окон.

Если нужно отправить какие-то данные по завершению пользовательской сессии, для этого рекомендуется использовать `navigator.sendBeacon(url, data)`. Он посылает данные в фоне. Переход к другой странице не задерживается: браузер покидает страницу, но всё равно выполняет sendBeacon.

#### `window.onbeforeunload`
Отмена этого события побудит браузер запросить у пользователя подтверждение ухода со страницы.

```js
window.onbeforeunload = function() {
  return false;
};
```
После присвоения такого обработчика бразуер будет запрашивать подтверждение при закрытии вкладки. Вкладка закроется только если пользователь нажмет Ok во всплывающем окне.

## События клавиатуры
Нажатия по клавишам на клавиатуре тоже способные генерировать события в документе. Мы ими пользуемся для обработки пользовательского ввода.

Объект браузерного события в случае с клавиатурой будет немного отличаться от объекта для событий мыши.

#### `event.code` и `event.key`
Свойство key объекта события позволяет получить символ, а свойство code – «физический код клавиши».

К примеру, одну и ту же клавишу Z можно нажать с клавишей Shift и без неё. В результате получится два разных символа: z в нижнем регистре и Z в верхнем регистре.

Свойство event.key – это непосредственно символ, и он может различаться. Но event.code всегда будет тот же.

#### `keydown` и `keyup`
Событие keydown происходит при нажатии клавиши, а keyup – при отпускании.


При долгом нажатии клавиши возникает автоповтор: keydown срабатывает снова и снова, и когда клавишу отпускают, то отрабатывает keyup. Так что ситуация, когда много keydown и один keyup, абсолютно нормальна.

#### `keypress` 
Устаревший тип события. Был объявлен устаревшим из-за несовместимостей в разных браузерах.  

Часть браузеров продолжают его поддерживать, по этому в коде может встречаться, но в своих разработках его использовать не рекомендуется. 

## Прокрутка
Благодаря обработке прокрутки можно управлять появлением или удалением различных элементов по мере того как пользователь перемещается по странице.

Чтобы создать обработчик прокрутки, используется событие `scroll`. 
```js
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});
```
Событие scroll работает как на window, так и на других элементах, на которых включена прокрутка, т.е. показан scrollbar.

Нельзя предотвратить прокрутку, используя event.preventDefault() в обработчике onscroll, потому что он срабатывает после того, как прокрутка уже произошла.

Но можно предотвратить прокрутку, используя event.preventDefault() на событии, которое вызывает прокрутку, например, на событии keydown для клавиш pageUp и pageDown.