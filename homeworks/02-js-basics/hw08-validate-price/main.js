const input = document.querySelector("#price-input");
const warningMsg = document.querySelector("#warning-msg");
const label = document.querySelector(".price-label");

// громоздкий код создания и вставки спана с ценой
// просто для удобства вынес в функцию
const addPrice = (price) => {
    input.classList.add("green-text");

    const outputPrice = document.createElement("span");
    outputPrice.classList.add("output-price");
    outputPrice.innerHTML = `Текущая цена: ${price}`;

    const removeBtn = document.createElement("span");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerText = "x";

    outputPrice.append(removeBtn);
    label.before(outputPrice);

    removeBtn.addEventListener("click", (event) => {
        event.target.parentElement.remove();
        clearInput();
    });
};

// используется несколько раз, вынес в отдельную функцию
const clearInput = () => {
    input.value = "";
    input.classList.remove("green-text");
};

input.addEventListener("blur", (event) => {
    const price = event.target.value;
    if (!price) return;
    if (Number.isNaN(+price) || +price <= 0) {
        //show warning
        warningMsg.classList.remove("hidden");
        input.classList.add("border-red");
        return;
    }
    // hide warning;
    warningMsg.classList.add("hidden");
    input.classList.remove("border-red");
    addPrice(price);
});

input.addEventListener("focus", () => {
    // рамочка зелёная в CSS прописана псевдоклассом
    clearInput();
});

// Обработчик событий - это функция, которая назначена на какое-то событие браузера, и срабатывает, когда это событие случается
