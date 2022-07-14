// const currentYear = 2022;


let date = new Date(); // {};
let date1 = new Date(0);
let date2 = new Date(24 * 3600 * 1000);
let date3 = new Date("2017-01-26");


// console.log( date ); //
// console.log( date1 ); // 1970-01-01T00:00:00.000Z
// console.log( date2 ); // 1970-01-02T00:00:00.000Z
console.log( date3 ); // 2017-01-26T00:00:00.000Z

// new Date(year, month, date, hours, minutes, seconds, ms)
// year должен состоять из четырёх цифр: значение 2013 корректно, 98 – нет.
// month начинается с 0 (январь) по 11 (декабрь).
// Параметр date здесь представляет собой день месяца. Если параметр не задан, то принимается значение 1.
// Если параметры hours/minutes/seconds/ms отсутствуют, их значением становится 0.

console.log( new Date( 2022, 5, 30, 0, 0, 0, 0 ) ); // 2010-12-31T22:00:00.000Z
// console.log( new Date( 2011, 0, 1 ) ); // то же самое, так как часы и проч. равны 0
// console.log( new Date( 2011, 0, 1, 2, 3, 4, 567 ) );  //2011-01-01T00:03:04.567Z