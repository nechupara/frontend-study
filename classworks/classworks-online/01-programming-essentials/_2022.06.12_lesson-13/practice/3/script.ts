/**
 * Задание 3.
 *
 * При наведеннии на блок 1 делать блок 2 зеленого цвета
 * А при наведении на блок 2 делать блок 1 красным цветом
 *
 */

const block1 = document.getElementById("block-1");
const block2 = document.getElementById("block-2");

const clearColor = () => {
    block1.style.backgroundColor = "";
    block2.style.backgroundColor = "";
};

block1.addEventListener("mouseenter", (event) => {
    block2.style.backgroundColor = "green";
    block1.style.backgroundColor = "";
});

block2.addEventListener("mouseenter", (event) => {
    block1.style.backgroundColor = "red";
    block2.style.backgroundColor = "";
});

block1.addEventListener("mouseleave", clearColor);
block2.addEventListener("mouseleave", clearColor);
