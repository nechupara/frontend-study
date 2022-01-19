/**
 * Задача 1.
 *
 * Необходимо «оживить» навигационное меню с помощью JavaScript.
 *
 * При клике на элемент меню добавлять к нему CSS-класс .active.
 * Если такой класс уже существует на другом элементе меню, необходимо
 * с того, предыдущего элемента CSS-класс .active снять.
 *
 * У каждый элемент меню — это ссылка, ведущая на google.
 * С помощью JavaScript необходимо предотвратить переход по всем ссылка на этот внешний ресурс.
 *
 * Условия:
 * - В реализации обязательно использовать приём делегирования событий (на весь скрипт слушатель должен быть один).
 */

const list = document.querySelector('ul');
let activeA = null;

list.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    
    const clicked = e.target;
    if (clicked.tagName !== 'A') return;

    if (!clicked.classList.contains('active')) {
        if (activeA) activeA.classList.remove('active');
        clicked.classList.add('active');
        activeA = clicked;
    } 

})