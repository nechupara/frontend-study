const icons = document.querySelectorAll('.icon-password');
const btn = document.querySelector('.btn');
const warnMsg = document.querySelector('.warning-msg');
const inputs = document.querySelectorAll('.input-password');

icons.forEach(elem => {
    elem.addEventListener('click', event => {
        const icon = event.target;
        console.log(icon);
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
        const input = icon.previousElementSibling;
        if (icon.classList.contains('fa-eye')) {
            input.setAttribute('type', 'password');
        } else {
            input.setAttribute('type', 'text');
        }
    })
})

btn.addEventListener('click', e => {
    if (inputs[0].value === inputs[1].value) {
        warnMsg.classList.add('hidden');
        alert('You are welcome!');
    } else {
        if (warnMsg.classList.contains('hidden')) {
           warnMsg.classList.remove('hidden'); 
        }
    }
})
