// ==================== БЕЗ НЕОБЯЗАТЕЛЬНОЙ ЧАСТИ
/* const insertList = (array, element = document.body) => {
    const listItemsString = array.map((item) => `<li>${item}</li>`).join("");
    element.insertAdjacentHTML("afterbegin", `<ul>${listItemsString}</ul>`);
    console.log(element);
};
insertList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]); */

// ================== С НЕОБЯЗАТЕЛЬНЫМ ЗАДАНИЕМ
const makeListString = (item) => {
    // функция для получения html строки (с рекурсией)
    if (!Array.isArray(item)) {
        return `<li>${item}</li>`;
    } else {
        const listItemsString = item
            .map((element) => makeListString(element))
            .join("");
        return `<ul>${listItemsString}</ul>`;
    }
};

const insertList = (array, nodeElement = document.body) => {
    // добавление списка на страницу
    nodeElement.insertAdjacentHTML("afterbegin", makeListString(array));

    // отсчёт трёх секунд и очистка страницы
    let seconds = 3;
    const timerOutput = document.createElement("p");
    document.body.append(timerOutput);
    timerOutput.innerText = seconds;

    const intervalID = setInterval(() => {
        seconds--;
        if (seconds === 0) {
            clearInterval(intervalID);
            document.body.innerHTML = "";
        } else {
            timerOutput.innerText = seconds;
        }
    }, 1000);
};

const testArray = [
    "Kharkiv",
    "Kiev",
    ["Borispol", ["Borispol", "Irpin"], "Irpin"],
    "Odessa",
    "Lviv",
    ["Borispol", ["Borispol", "Irpin"], "Irpin"],
    "Dnieper",
];

insertList(testArray);
