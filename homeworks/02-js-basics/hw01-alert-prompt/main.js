// Ответы на теоретические вопросы находятся в файле answers.md. 
// Вопросы и задание находятся в файле task.md
let userName = prompt('Введите Ваше имя:');
while (!userName || !Number.isNaN(+userName)) {
    userName = prompt('Вы не ввели Ваше имя.\nВведите Ваше имя:');
}

let userAge = prompt('Введите Ваш возраст:');
while (Number.isNaN(+userAge) || !userAge) {
    userAge = prompt('Вы не ввели свой возраст.\nВведите Ваш возраст:');
}
userAge = +userAge;

if (userAge < 18) {
    alert('You are not allowed to visit this website.');
} else if (userAge >= 18 && userAge <= 22) {
    if (confirm('Are you sure you want to continue?')) {
        alert(`Welcome, ${userName}!`);
    } else {
        alert('You are not allowed to visit this website.');
    }
} else {
    alert(`Welcome, ${userName}!`);
}
