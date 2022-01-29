/**
 * Задание 4.
 *
 * С помощью цикла for...in вывести в консоль все свойства
 * первого уровня объекта в формате «ключ-значение».
 *
 * Продвинутая сложность:
 * Улучшить цикл так, чтобы он умел выводить свойства объекта второго уровня вложенности.
 */

/* Дано */
const user = {
  firstName: 'Walter',
  lastName: 'White',
  job: 'Programmer',
  pets: {
    cat: 'Kitty',
    dog: 'Doggy',
  },
};

for (const userKey1 in user) {
  console.log(`level1 - ${userKey1} : ${user[userKey1]}`);
  if (typeof user[userKey1] === "object" ){
    for (const userKey2 in user[userKey1]) {
      console.log(`level2 - ${userKey2} : ${user[userKey1][userKey2]}`)
    }
  }

}
