# Gulp

### Что такое Gulp
Это таск-менеджер, который призван помочь нам автоматизировать скучные процессы в разработке. С его помощью можно сделать:

* объединение всех файлов со стилями в один
* добавление к префиксов ко всем css свойствам, котрые в этом нуждаются
* объединение js файлов в один
* перевод JavaScript кода с более новых стандартов на ES5
* и тд.

### Начало работы с Gulp
Прежде всег нужно убедиться, что у Вас создан npm проект и в нем уже есть файл `package.json`.
Что может содержать [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

Если Вы впервые на компьютере устанавливаете Gulp, то начать стоит с выполнения кодманды - `npm install gulp-cli --global`. После выполнения установки на Вашем компьютере появится возможность обращаться к такс-менеджеру в консоли. Это нужно для того, чтобы потом посленастройки можно было запускать Gulp.


После этого можно установить сам таск-менеджер уже в конкретный проект. Для этого выполняем в консоли команду - `npm install gulp --save-dev`.

### Настройка работы Gulp
Для настройки нужно в папке проекта создать файл `gulpfile.js`. После запуска таск-менееджера именно этот файл будет отвечать за то как, что и в какой послдовательности нужно запускать.

Чтобы осуществлять настройку, добавлять задачи и выстраивать их последовательность нужно:
 * определиться со списком модулей, которые понадобятся
 * установить каждый из них, согласно их документации
 * в самом верху `gulpfile.js` импортировать эти модули. Пример обычно тоже есть в документации
 
Итак, в качестве примера, у нас в проекте установлены модули: `gulp-clean`, 'gulp-concat'.

Чтобы импортировать эти модули есть два способа.

1) Более старый при помощи функции `require`:
    ```js
   const gulp = require('gulp');
   const clean = require('gulp-clean');
   const concat = require('gulp-concat');
    ```
2) Более новый, продвинутый с использованием оператора `import`:
    ```js
   import gulp from 'gulp';
   import clean from 'gulp-clean';
   import concat from 'gulp-concat';
    ```
   Но стоит учесть, что для того, чтобы этот вариант сработал, в файле `package.json` нужно добавить свойство `"type": "module"`.
   
#### Создать задачу
Чтобы создать задачу для gulp, у него есть метод `task`. При вызове туда передается 2 аргумента:
* название задачи. мы его придумываем сами, какое нам удобно, и передаем в качестве строчного значения
* функция, которая за эту задачу отвечает. Ее можно объявлять прям при перечислении аргументов, или передавать уже созданную - без разницы

Создадим задачу для очистки папки `dist`:
```js
gulp.task('cleanDist', () => {
  return gulp.src('dist', {allowEmpty: true})
      .pipe(clean())
})
```

`gulp.src` - методы, при помощи которого мы говорим gulp-у какие файлы взять. Первый аргумент - путь к файлам, второй аргумент - объект с дополнительными настройками.

`{allowEmpty: true}` - настройка, которая говорит таск-менеджеру что файлов по этому пути может и не быть. В таком случае он просто продолжить выполнение остальных задач.

`.pipe()` - метод, который вызывается на результате выполнения `gulp.src()`. Предназначен для описания того, что мы хотим сделать с файлами. Принято использовать по одному `.pipe()` на каждый этап обработки файлов. Т.е. если нужно собрать все js файлы в один и потом преобразовать их к стандарту ES5, то обе эти операции будут выполнятсья в отдельных `.pipe()` друг за другом.

### Дополнительные методы Gulp
**`gulp.series`** - позволяет перечислить через запятую функции, которые должны сработать друг за другом. Используется для построения сложных, комплексных задач, такхи как билд приложения - в него должны входить и сборка стилей, и сборка js-а и прочие вещи.
```js
gulp.task('build', gulp.series(
  cleanBuild, // предполагается что эта функция уже определена выше
  htmlBuild, // предполагается что эта функция уже определена выше
  scssBuild, // предполагается что эта функция уже определена выше
  jsBuild, // предполагается что эта функция уже определена выше
))
``` 

**`gulp.parallel`** - предназначение у него такое же как и у `gulp.series`, с одной поправкой. Тут нет гарантии, что функции отработают в заданном порядке, все они будт выполняться асинхронно. Это часто помагает экономить время.

Так же можно использовать оба этих методы внутри друг друга:
```js
gulp.task('default', gulp.series(
	gulp.parallel(
        cleanBuild,
        htmlBuild,
        scssBuild,
        jsBuild,
        phpBuild,
    ), // сработают в неизвестном порядке, но только после того как все будут завершены - выполнятся следующие функции
	gulp.parallel(fontsBuild,imgBuild), // сработают в неизвестном порядке, но только после того как все будут завершены - выполнятся следующие функции
	watcher
));
``` 