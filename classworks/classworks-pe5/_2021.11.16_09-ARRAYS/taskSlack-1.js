// Есть массив брендов автомобилей ["bMw", "Audi", "teSLa", "toYOTA"].
// Вам нужно получить новый массив, объектов типа
// {
//     type: 'car'
//     brand: ${элемент массива}
// }

const brands = ["bMw", "Audi", "teSLa", "toYOTA"];

const fullData = brands.map((e) => {
    return {
        type: "car",
        brand: e,
        isElectric: null,
    };
});

console.log(fullData);

fullData.forEach(e => {
    if (e.brand.toLowerCase() === 'tesla') {
        e.isElectric = true;
    } else {
        e.isElectric = false;
    }
})

console.log(fullData);

