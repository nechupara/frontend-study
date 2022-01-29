const wrapper = document.querySelector("#container");
let prevDiv = null;

wrapper.addEventListener('click', e => {
    e.stopPropagation();

    if (e.target.id === 'container') return;
    if(!e.target.classList.contains('pink')) {
        if (prevDiv) prevDiv.classList.remove('pink');
        e.target.classList.add('pink');
        prevDiv = e.target;
    }
})
