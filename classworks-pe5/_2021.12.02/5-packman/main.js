/**
 * Task - 05
 *
 * Recreate a pack-man on the page. And make it movable.
 *
 * Make user controls direction of pack-man movement by pressing W, S, A, D keys.
 *
 *  W - pack-man moves 20px to top from it's current position;
 *  S - pack-man moves 20px to bottom from it's current position;
 *  A - pack-man moves 20px to the left from it's current position;
 *  D - pack-man moves 20px to the right from it's current position;
 * */

const packman = document.querySelector('.packman');

window.addEventListener('keydown', e => {
    console.log(packman);
    const coordinats = packman.getBoundingClientRect();
    console.log(coordinats);
    console.log(typeof packman.offsetLeft); 
    if (e.code === 'KeyD') {
        console.log(packman.style.left);
        packman.style.left = '20px';
    }
})
