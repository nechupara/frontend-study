/**
 * Задание 4.
 *
 * Реализовать табы
 * */

const tabs = document.querySelectorAll(".button")! as NodeListOf<HTMLElement>;
const firstTab = document.querySelector(".button");
tabs.forEach((element) => {
    element.addEventListener("click", (e: MouseEvent) => {
        (e.target as HTMLElement).classList.add("active");
    });
});

firstTab.click();
