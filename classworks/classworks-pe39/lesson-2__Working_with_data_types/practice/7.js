// Спросить у пользователя его имя.
// В следующем окне спросить у пользователя его фамилию.
// В следущем окне спросить у пользователя его год рождения.
// Вывести для пользователя - его имя, фамилию и его возраст.
let bio ={};
let name = prompt('name');
let surname = prompt("surname");
let year = +prompt('year of birth');// "+" -->parseInt
bio={
    bio_name:name,
    bio_surname:surname,
    bio_year:year,
}
console.log(bio);