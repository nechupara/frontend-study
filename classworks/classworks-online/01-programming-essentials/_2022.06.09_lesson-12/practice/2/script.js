/**
 * Задание 2.
 *
 * Реализовать функцию addTodoItem которая будет получать из инпута значения и создавать новый пункт списка.
 */

const addTodoItem = () => {
    const inputValue = document.querySelector(".input");
    const list = document.querySelector("#list");
    list.insertAdjacentHTML("beforeend", `<li>${inputValue.value}</li>`);
    inputValue.value = '';
};
