const priceInputElement = document.getElementById("price-input");

const addPrice = (price) => {
    priceInputElement.classList.add("green-text");

    const priceOutputSpan = document.createElement("span");
    priceOutputSpan.classList.add("output-price");
    priceOutputSpan.innerHTML = `Current price: ${price}`;

    const removeBtn = document.createElement("span");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerText = "x";
    removeBtn.addEventListener("click", (event) => {
        event.target.closest(".output-price").remove();
        clearPriceInputElement();
    });

    priceOutputSpan.insertAdjacentElement("beforeend", removeBtn);

    document.body.insertAdjacentElement("afterbegin", priceOutputSpan);
};

const clearPriceInputElement = () => {
    priceInputElement.value = "";
    priceInputElement.classList.remove("green-text");
};

const showWarning = () => {
    document.getElementById('warning-message').classList.remove('display-none');
    priceInputElement.classList.add('border-red');
}

const hideWarning = () => {
    document.getElementById('warning').classList.remove('display-show');
}

priceInputElement.addEventListener("blur", (event) => {
    const price = event.target.value
    if (!price) return;
    if (Number.isNaN(+price) || +price <= 0) {
        showWarning();
        return;
    }
    hideWarning();
    addPrice(price);
});

priceInputElement.addEventListener("focus", () => {
    clearPriceInputElement();
});
