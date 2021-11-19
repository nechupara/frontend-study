/* 
//////////////////////////////
// ПЕРВЫЙ ВАРИАНТ МОЕГО РЕШЕНИЯ:
///////////////////////////////

const cloneObject = (obj) => {
    if (Array.isArray(obj)) {
        const newObj = [];
        for (let elem of obj) {
            if (typeof elem !== "object" || elem === null) {
                newObj.push(elem);
            } else {
                newObj.push(cloneObject(elem));
            }
        }
        return newObj;
    } else {
        const newObj = {};
        for (let key in obj) {
            if (typeof obj[key] !== "object" || obj[key] === null) {
                newObj[key] = obj[key];
            } else {
                newObj[key] = cloneObject(obj[key]);
            }
        }
        return newObj;
    }
};
*/

// ВТОРОЙ (ИЗМЕНЁННЫЙ) ВАРИАНТ:
const cloneObject = (obj) => {
    const newObj = Array.isArray(obj) ? [] : {};

    const arrayOfKeys = Object.keys(obj);
    for (let key of arrayOfKeys) {
        if (typeof obj[key] !== "object" || obj[key] === null) {
            newObj[key] = obj[key];
        } else {
            newObj[key] = cloneObject(obj[key]);
        }
    }
    return newObj;
};

// Проверка:
const testObj = {
    a: 66,
    y: { b: 333, zzz: 44 },
    c: 252,
    tt: [55, "sdfsdf", { b: 333, zzz: 44 }, 666],
    zzzz: 88,
};

const clonedObj = cloneObject(testObj);
console.log(clonedObj);
console.log(clonedObj.y === testObj.y, clonedObj.tt ===testObj.tt, clonedObj.tt[2] === testObj.tt[2]);
