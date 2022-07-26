/**
 * Задание 8.
 *
 * Написать программу-помощник преподавателя.
 *
 * Будем использовать американскую систему оценивания знаний.
 * Эта система работает на баллах и оценках в виде букв.
 * Расшифровывается следующим образом:
 *
 * Баллы  | Оценка |
 * 95-100 | A      |
 * 90-94  | A-     |
 * 85-89  | B+     |
 * 80-84  | B      |
 * 75-79  | B-     |
 * 70-74  | C+     |
 * 65-69  | C      |
 * 60-64  | C-     |
 * 55-59  | D+     |
 * 50-54  | D      |
 * 25-49  | E      |
 * 0-24   | F      |
 * -----------------
 *
 * Программа должна спрашивать имя и фамилию студента, а также количество баллов, которое на набрал.
 *
 * Программа должна повторно запрашивать данные, если были некорректно введены:
 * - Имя студента (строка, состоящая минимум из двух слов); https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/split
 * - Количество баллов, которое набрал студент (число от 0 до 100).
 *
 * Если все данные данные введены верно, программа конвертирует
 * числовое количество баллов в буквенную оценку и выводит сообщение в консоль:
 * «К студенту ИМЯ_СТУДЕНТА прикреплена оценка «ОЦЕНКА».».
 *
 * После выведения этого сообщения программа должна спросить,
 * есть-ли необходимость сконвертировать оценку для ещё одного студента,
 * и должна начинать свою работу сначала до тех пор, пока пользователь не ответит «Нет.».
 *
 * Когда пользователь откажется продолжать работу программы, программа выводит сообщение:
 * «✅ Работа завершена.».
 */