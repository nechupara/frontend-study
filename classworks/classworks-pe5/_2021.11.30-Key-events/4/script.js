/**
 * При натисканні на enter в полі вводу
 * додавати його значення, якщо воно не пусте,
 * до списку задач та очищувати поле вводу
 *
 * При натисканні Ctrl + D на сторінці видаляти
 * останню додану задачу
 *
 * Додати можливість очищувати весь список
 * Запустити очищення можна двома способами:
 * - при кліці на кнопку Clear all
 * - при натисканні на Alt + Shift + Backspace
 *
 * При очищенні необхідно запитувати у користувача підтвердження
 * (показувати модальне вікно з вибором Ok / Cancel)
 * Якщо користувач підвердить видалення, то очищувати список,
 * інакше нічого не робити зі списком
 *
 */

const input = document.querySelector('#new-task');
const taskLIst = document.querySelector('.tasks-list');
const clearBtn = document.querySelector('#clear');

const isDelete = () => {
    return confirm('Are you sure?');
}

input.addEventListener('keydown', e => {
    if (e.code !== 'Enter') return;
    if (input.value) {
        taskLIst.insertAdjacentHTML('beforeend', `<li>${input.value}</li>`);
        input.value = '';
    }
})

window.addEventListener('keydown', e => {
    if (e.code === 'KeyM' && e.ctrlKey === true && e.repeat === false) {
        if(taskLIst.lastElementChild !== null) taskLIst.lastElementChild.remove();
        return;
    }

    if (e.code === 'Backspace' && e.altKey === true && e.shiftKey === true && e.repeat === false) {
        if (!isDelete()) taskLIst.innerHTML = '';
        
    }

})

clearBtn.addEventListener('click', () => {
    if (!isDelete()) taskLIst.innerHTML = '';
})



