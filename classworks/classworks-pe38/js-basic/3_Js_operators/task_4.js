// Написать программу, которая будет приветствовать пользователя.
// Сперва пользователь вводит своё имя, после чего программа выводит
// в консоль сообщение с учётом его должности.

// Например 'Добро пожаловать, CTO Mike'

//  Список должностей:
//   Mike — CEO;
//   Jane — CTO;
//   Walter — программист:
//  Oliver — менеджер;
//   John — уборщик.

//   Если введёно не известное программе имя — вывести в консоль сообщение «Пользователь не найден.».

//   Выполнить задачу в двух вариантах:
//   - используя конструкцию if/else if/else;
//   - используя конструкцию switch.

const userName = prompt("Enter your name");
let profession;
switch (userName) {
  case "Mike":
    profession = "CEO";
    break;
  case "Jane":
    profession = "CTO";
    break;
  case "Walter":
    profession = "Programmer";
    break;
  case "Oliver":
    profession = "Manager";
    break;
  case "John":
    profession = "Cleaner";
    break;
}

if (profession) {
  console.log(`Добро пожаловать, ${profession} ${userName}`);
} else {
    console.log('Пользователь не найден.');
}


