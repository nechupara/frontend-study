/**
 * Завдання 4.
 *
 * При натисканні на кнопку Validate відображати
 * VALID зеленим кольром, якщо значення проходить валідацію
 * INVALID червоним кольором, якщо значення не проходить валідацію
 *
 * Правила валідації значення:
 * - значення не пусте
 *
 * ADVANCED
 * Правила валідації значення:
 * - повинно містити щонайменше 5 символів
 * - не повинно містити пробілів
 * - повинно починатися з літери (потрібно використати регулярні вирази)
 *
 */

const input = document.getElementById("input")! as HTMLInputElement;
const validateBtn = document.getElementById("validate-btn")! as HTMLButtonElement;

const modalField = document.createElement("div");
modalField.classList.add("message", "hidden");
validateBtn.insertAdjacentElement("afterend", modalField);

const validate = () => {
    const text = input.value
    if (text.includes(' ') || text.length < 5 || !text) {
        modalField.classList.remove("hidden");
        modalField.classList.add("valid");
        modalField.innerText = "VALID";
    } else {
        modalField.classList.remove("hidden");
        modalField.classList.add("hidden");
    }
};

validateBtn.addEventListener("click", validate);
