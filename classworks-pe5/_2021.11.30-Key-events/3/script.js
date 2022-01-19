/**
 * При натисканні shift та "+"" одночасно збільшувати
 * шрифт сторінки на 1px
 * а при shift та "-" - зменшувати на 1px
 *
 * Максимальний розмір шрифту - 30px, мінімальний - 10px
 *
 */


const body = document.body;

console.log(window.getComputedStyle(document.body).fontSize);

window.addEventListener('keydown', e => {
    console.log(e);
    if (e.key === '+' && e.shiftKey === true && e.repeat === false ) {
       const currentSize = Number.parseInt(window.getComputedStyle(body).fontSize);
       if (currentSize >= 30) return;
       body.style.fontSize = `${currentSize + 1}px`;
       console.log(currentSize + 1);
    }
    if (e.key === '_' && e.shiftKey === true && e.repeat === false ) {
        const currentSize = Number.parseInt(window.getComputedStyle(body).fontSize);
        if (currentSize <= 10) return;
        body.style.fontSize = `${currentSize - 1}px`;
        console.log(currentSize - 1);
    }
    // console.log(e);
})