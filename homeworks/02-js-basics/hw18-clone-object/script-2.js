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

const testObj = {
    a: 66,
    y: { b: 333, zzz: 44 },
    c: 252,
    tt: [55, "sdfsdf", { b: 333, zzz: 44 }, 666],
    zzzz: 88,
};

const clonedObj = cloneObject(testObj);
console.log(clonedObj);
console.log(
    clonedObj.y === testObj.y,
    clonedObj.tt === testObj.tt,
    clonedObj.tt[2] === testObj.tt[2]
);
