/**
 * Рахувати кількість натискань на пробіл, ентер,
 * та Backspace клавіші
 * Відображати результат на сторінці
 *
 */

const enterCounter = document.querySelector('#enter-counter');
const spaceCounter = document.querySelector('#space-counter');
const backspacesCounter = document.querySelector('#backspace-counter')
window.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
        enterCounter.textContent = +enterCounter.textContent + 1;
    }
    if (event.code === 'Space') {
        spaceCounter.textContent = +spaceCounter.textContent + 1;
    }
    if (event.code === 'Backspace') {
        backspacesCounter.textContent = +backspacesCounter.textContent + 1;
    }
})