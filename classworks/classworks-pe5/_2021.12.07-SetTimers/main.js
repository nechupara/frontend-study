const task = document.querySelector('#task');
const time = document.querySelector('#time');
const button = document.querySelector('#btn');

window.addEventListener('DOMContentLoaded', () => {
    task.focus();
})

button.addEventListener('click', () => {
    setTimeout(() => {
        alert(task.value);
    }, +time.value*1000)
})

const userName = document.querySelector('#name');


userName.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        console.log(userName.value);
        const obj = {
            name: userName.value,
            date: new Date(),
        }
        localStorage.setItem('name', JSON.stringify(obj));
    }
});

window.addEventListener('load', () => {
    const obj = JSON.parse(localStorage.getItem('name'));
    
    if (obj) {
        alert('hello, ' + obj.name)
    }
})