const buttons = document.querySelectorAll(".btn");
let blueIndex = null;

window.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    buttons.forEach((elem, index) => {
        // if (elem.innerText.toLowerCase() === e.key.toLocaleLowerCase()) {
        if (e.code === `Key${elem.innerText}` || e.code === elem.innerText) {
            if (blueIndex !== null) buttons[blueIndex].style.backgroundColor = "black";
            elem.style.backgroundColor = "blue";
            blueIndex = index;
        }
    });
});

//Для элемента input лучше не использовать события клавиатуры, потому что есть различные
// методы ввода (в том числе и голосовые). Ну и у инпута для этого есть свои встроенные
// более удобные методы.