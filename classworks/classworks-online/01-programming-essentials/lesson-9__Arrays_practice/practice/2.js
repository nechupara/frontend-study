/**
 * Задача 2.
 *
 * Есть массив брендов автомобилей ["bMw", "Audi", "teSLa", "toYOTA"].
Вам нужно получить новый массив, объектов типа
{
    type: 'car'
    brand: ${элемент массива}
}*/

// Вывести массив в консоль
const carBrands = [ "bMw", "Audi", "teSLa", "toYOTA" ];
const carBrandsObj = carBrands.map(brandCar => {
	return {type:'car', brand:brandCar}
})
console.log(carBrandsObj);