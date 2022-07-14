"use strict";
/**
 * Задание 4.
 *
 * Реализовать табы
 * */
const tabs = document.querySelectorAll(".button");
const firstTab = document.querySelector(".button");
tabs.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.target.classList.add("active");
    });
});
firstTab.click();
//# sourceMappingURL=script.js.map