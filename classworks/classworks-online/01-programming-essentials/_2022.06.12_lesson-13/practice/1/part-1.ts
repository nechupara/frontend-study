/**
 * Задание 1.
 *
 * Написать скрипт, который создаст элемент button с текстом «Войти».
 *
 * При клике по кнопке выводить alert с сообщением: «Добро пожаловать!».
 */

/**
 * Задание 2.
 *
 * Улучшить скрипт из предыдущего задания.
 *
 * При наведении на кнопку  указателем мыши, выводить alert с сообщением:
 * «При клике по кнопке вы войдёте в систему.».
 *
 * Сообщение должно выводиться один раз.
 *
 * Условия:
 * - Решить задачу грамотно.
 */

{const btn = document.createElement("button");

btn.innerText = "Войти";
document.body.prepend(btn);

btn.addEventListener("click", (event) => {
    alert("You're welcome");
});

btn.addEventListener("mouseenter", (event) => {
    alert("При клике по кнопке вы войдёте в систему.");
}, {once: true});}
