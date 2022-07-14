/**
 * Завдання 3.
 *
 * При натисканні на enter в полі вводу
 * додавати його значення, якщо воно не пусте,
 * до списку задач та очищувати поле вводу
 *
 * При натисканні Ctrl + D на сторінці видаляти
 * останню додану задачу
 *
 * Додати можливість очищувати весь список
 * Запустити очищення можна двома способами:
 * - при кліці на кнопку Clear all
 * - при натисканні на Alt + Shift + Backspace
 *
 * При очищенні необхідно запитувати у користувача підтвердження
 * (показувати модальне вікно з вибором Ok / Cancel)
 * Якщо користувач підвердить видалення, то очищувати список,
 * інакше нічого не робити зі списком
 *
 */

const input = document.getElementById("new-task")! as HTMLInputElement;
const list = document.querySelector(".tasks-list")! as HTMLUListElement;
const clearBtn = document.getElementById("clear")! as HTMLButtonElement;

const clearListHandler = () => {
    if (confirm("Delete all items?")) {
        list.innerHTML = "";
    }
};

input.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.code === "Enter" && input.value) {
        const listItem = document.createElement("li");
        listItem.innerText = input.value;
        input.value = "";
        list.append(listItem);
    }
});

document.body.addEventListener("keydown", (e: KeyboardEvent) => {
    console.log(e);

    if (e.code === "KeyD" && (e.ctrlKey || e.metaKey)) {
        list.lastElementChild?.remove();
    } else if (e.code === "Backspace" && e.shiftKey && e.altKey) {
        clearListHandler();
    }
});

clearBtn.addEventListener("click", clearListHandler);
