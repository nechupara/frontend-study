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

const list = document.querySelector("ul")!;

list.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    const clickedItem = e.target as HTMLElement;
    if (clickedItem.tagName === "A") clickedItem.classList.add('active');
});
