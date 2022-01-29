/**
 * Задание 2.
 *
 * При загрузке страницы посмотреть - есть ли в localStorage значение по ключу userName?
 * Если есть - выводить сообщение "Hello, userName" на экран,
 * где вместо userName должно быть вставлено значение по одноименному ключу в localStorage
 * Если значения по такому ключу нет - спросить у пользователя имя, модальным окном, записать его в localStorage.
 * После этого вывести сообщение "Hello, userName" на экран,
 * где вместо userName должно быть вставлено значение по одноименному ключу в localStorage
 */

// window.addEventListener("load", () => {
//     let userName = localStorage.getItem("userName");
//     if (!userName) {
//         userName = prompt("Enter your name");
//         localStorage.setItem("userName", userName);
//     }
//     alert(`Hello, ${userName}!`);
// });


// function showMsg(msg, delay, amount) {
    
//     setTimeout(() => {
//         console.log(msg);
//         if (--amount > 0) {
//             showMsg(msg, delay, amount);
//         }
//     }, delay)
// }

// showMsg('fucker', 1000, 3);

const mailStorage = [
	{
		id: '1',
		text: 'asfdgsfhd',
	},
	{
		id: '2',
		text: 'qwtey',
	},
	{
		id: '3',
		text: 'fdjfgjgjgf',
	},
];

const downlaod = document.createElement('div');
downlaod.innerHTML = '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
document.body.append(downlaod);

setTimeout(() => {
    downlaod.remove();
    const list = document.createElement('ul');
    mailStorage.forEach((elem) => {
        list.insertAdjacentHTML('beforeend', `<li>${elem.text}<button>X</button></li>`)
    })
    document.body.append(list);
}, 2000)

const list = document.querySelector('ul');
console.log(list);

list.addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') return;
    alert('llll')
})
