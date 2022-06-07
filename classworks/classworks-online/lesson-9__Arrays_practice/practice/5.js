/**
 * Задача 5.
 *
 * Есть массив брендов автомобилей ["bMw", "Audi", "teSLa", "toYOTA"].
 * Вам нужно получить новый массив, объектов типа
{
    type: 'car'
    brand: ${элемент массива}
}

 * Для всех машин добавить свойство isElectric, для теслы оно будет true, для остальных false;
 * Для того чтоб проверять что машина электрическая создать отдельную функцию что будет хранить
 * в себе массив брендов электрических машин и будет проверять входящий элемент - на то,
 * если он в массиве.

 * Создать новый массив, в котором хранятся все машины, что не являются электрокарами.
 * Вывести его в модальное окно пользователю.
 */

const carBrands = [ "bMw", "Audi", "teSLa", "toYOTA" ];

const isElectricCar =(brand) => {
	const electrobrands = ["teSLa", "Nissan Leaf"];
	return electrobrands.includes(brand)
}

const carBrandsObj = carBrands.map(brandCar => {
	return {type:'car', brand:brandCar, isElectric:isElectricCar(brandCar)}
})

console.log(carBrandsObj);

const isNotElectro= carBrandsObj.reduce((cars, item) => {
	if (!item.isElectric) {
		cars.push(item);
	}
	return cars;
}, []);

console.log(isNotElectro);