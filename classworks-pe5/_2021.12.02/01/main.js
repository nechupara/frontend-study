const tree = document.querySelector('#tree');

tree.addEventListener('click', e => {
    e.stopPropagation();
    if (e.target.tagName !== 'LI') return;

    console.log(e.target.children);
    if (e.target.children.length) {
        if (!e.target.firstElementChild.style.display) {
            e.target.firstElementChild.style.display = 'none';
        } else {
            e.target.firstElementChild.style.display = '';
        }
        
    }

})