## Материалы для изучения

[Введение в браузерные события](https://learn.javascript.ru/introduction-browser-events)

[Всплытие и погружение](https://learn.javascript.ru/bubbling-and-capturing)

[DOMContentLoaded, load, beforeunload, unload](https://learn.javascript.ru/introduction-browser-events)





События загрузки страницы:

- DOMContentLoaded генерируется на document , когда DOM готов. Мы можем применить JavaScript к элементам на данном этапе.
  - Скрипты, вроде `<script>...</script>` или `<script src="..."></script>` блокируют DOMContentLoaded, браузер ждёт, пока они выполнятся.
  - Изображения и другие ресурсы тоже всё ещё могут продолжать загружаться.
- Событие `load` на `window` генерируется, когда страница и все ресурсы загружены. Мы редко его используем, потому что обычно нет нужды ждать так долго.
- Событие `beforeunload` на `window` генерируется, когда пользователь покидает страницу. Если мы отменим событие, браузер спросит, на самом ли деле пользователь хочет уйти (например, у нас есть несохранённые изменения).
- Событие `unload` на `window` генерируется, когда пользователь окончательно уходит, в обработчике мы можем делать только простые вещи, которые ни о чём не спрашивают пользователя и не заставляют его ждать. Из-за этих ограничений оно редко используется. Мы можем послать сетевой запрос с помощью `navigator.sendBeacon`.  
- document.readyState  – текущее состояние документа, изменения можно отследить с помощью события readystatechange:
  - `loading` – документ грузится.
  - `interactive` – документ прочитан, происходит примерно в то же время, что и `DOMContentLoaded`, но до него.
  - `complete` – документ и ресурсы загружены, происходит примерно в то же время, что и `window.onload`, но до него.



#### Demo Scroll

http://www.dpmanager.no/system/commons/scrollmagic/

https://www.framer.com/fp/

https://mauerfall.diletant.media/

https://connect-homes.com/
