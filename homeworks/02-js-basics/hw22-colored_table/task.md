## Задание

Создать таблицу, при клике на ячейки которой они будут менять цвет. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

#### Технические требования:
- Создать поле 30*30 из белых клеточек с помощью элемента ```<table>```.
- При клике на белую клеточку она должна менять цвет на черный. При клике на черную клеточку она должна менять цвет обратно на белый.
- Сама таблица должна быть не вставлена в исходный HTML код, а сгенерирована и добавлена в DOM страницы с помощью Javascript.
- Обработчик события `click` нужно повесить на всю таблицу. События всплывают от элемента вверх по DOM дереву, их все можно ловить с помощью одного обработчика событий на таблице, и в нем определять, на какую из ячеек нажал пользователь.
- При клике на любое место документа вне таблицы, все цвета клеточек должны поменяться на противоположные (подсказка: нужно поставить Event Listener на `<body>`).
- Чтобы поменять цвета всех клеточек сразу, не нужно обходить их в цикле. Если помечать нажатые клетки определенным классом, то перекрасить их все одновременно можно одним действием - поменяв класс на самой таблице.

#### Литература:
- [Всплытие и перехват событий](http://learn.javascript.ru/event-bubbling)


To successful passing of our test you should handle with following criterions:
the game MUST work without errors
presets for game difficulty you can fetch using this endpoint this-domain/game-settings. This is should be request to the server NOT just copy paste of data.
This data is array of objects with two fields:
field - contain size of game field. Should be square form
delay - time in milliseconds
data for leader board you can get from this-domain/winners. Also it should be a request.
when someone wins you should send request to server with JSON which contain two fields winner and date
We have next gameplay:
user set game difficulty and name
press PLAY
at a specified time interval (in the delay field) a random square on the field is highlighted in blue
if the user managed to click on the square during this time - he turns green, the player gets a point and the field changes color to green
if not, the field turns red and the point goes to the computer
when a player or computer paints >50% of all possible squares in his color - he becomes the winner
an inscription appears between the control buttons and the playing field that the player (the name he entered) / computer won
button PLAY changes the caption to PLAY AGAIN
result of the game need to be send to server on this endpoint this-domain/winners in JSON with two fields winner and date both strings.
results in table should be auto update
