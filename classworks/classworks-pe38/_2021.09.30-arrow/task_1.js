// Получить от пользователя данные
// о нужной конфигурации автомобиля: марка, цвет, год выпуска, пробег.
// Год выпуска проверить на число и на соответствие диапазону 1960 и текущим годом.
// Пробег проверить на число и на то что число больше 0 и меньше 200000.
// Из полученных данных создать объект автомобиля с помощью функции.
// Функция принимаем в себя параметры автомобиля и возвращает объект автомобиля.
// Без переданных данных, возвращает объект вида
// {
//     brand: 'Audi',
//     appearance: {
//         color: 'white'
//     },
//     year: ${текущий год},
//     mileage: 0
// }, а с переданными - соответствующие поля заполняются нужными данными.

// Полученный объект автомобиля вывести в консоль.
// Пользователю в модальном окне вывести фразу
// `Спасибо, инфа о вашем автомобиль марки ${введеная марка} сохранена.
// Код доступа к информации ${код доступа}`.
// Код доступа сформировать из введеной марки,
// в которой все символы будут в верхнем регистре, введеного пробега и
// строки вида `13032021` - сегодняшняя дата и год.

// Получаем год
const getYear = () => {
  let year = prompt("Enter year:");
  // создаём переменную с текущим годом
  const currentYear = new Date().getFullYear();
//   проверяем правильность года в дипазоне 1960 - текущий год
  while ((year < 1960 || year > currentYear) && year !== null && year !== "") {
    year = prompt("Enter year again:");
  }
//   если год не был введён, возвращаем текущий
  if (!year) {
    return currentYear;
  }
  return year;
};
// Получаем название бренда
const getBrand = () => {
  let brand = prompt("Введите марку автомобиля:");
//   если бренд не введён, возвращаем Ауди
  if (!brand) return "Audi";
//   если введён, возвращаем бренд
  return brand;
};

const getColor = () => {
  let color = prompt("Enter color:");
  return color ? color : "white";
};

const getMileage = () => {
  let mileage = prompt("Enter mileage:");
  return mileage ? mileage : 0;
};

// Запуск функции, запускающей запросы для получения данных от пользователя
const getUserData = () => {
  return {
    year: getYear(),
    brand: getBrand(),
    color: getColor(),
    mileage: getMileage(),
  };
};

// Функция-конструктор для создания объекта со свойствами автомобиля
function Car(carData) {
  this.brand = carData.brand;
  this.appearence = { color: carData.color };
  this.year = carData.year;
  this.mileage = carData.mileage;
}

const getPassword = (brand, mileage) => {
    const currentFullDate = new Date();
    const currentYear = currentFullDate.getFullYear();
    const currentMonth = currentFullDate.getMonth() + 1;
    const currentDay = currentFullDate.getDate();
    return `${brand.toUpperCase()}${mileage}${currentDay}${currentMonth}${currentYear}`
}
// Создаём объект userCar
const userCar = new Car(getUserData());
console.log(userCar);

alert(`Спасибо, инфа о вашем автомобиль марки ${userCar.brand} сохранена.
Код доступа к информации ${getPassword(userCar.brand, userCar.mileage)}`)

