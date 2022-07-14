/**
 * Задание 1.
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


const usScores =() => {
	let usName= prompt("Enter your name -");
	while(!Boolean(usName) || !isNaN(Number(usName))){
		usName= prompt("Enter your name-");
	}
	let usSurname= prompt("Enter your Surname-");
	while(!Boolean(usSurname) || !isNaN(Number(usSurname))){
		usSurname= prompt("Enter your Surname-");
	}
	let score= Number(prompt("Enter your score-"));
	while(!Boolean(score) || isNaN(score) || score>100 ||score<0){
		score= Number(prompt("Enter your score again-"))
	}
	let usMark=null;
	if (score>=0 && score<=24){
		usMark="F"
	} else if (score>=25 && score<=49){
		usMark="E"
	}else if (score>=50 && score<=54){
		usMark="D"
	} else if (score>=55 && score<=59){
		usMark="D+"
	} else if (score>=60 && score<=64){
		usMark="C-"
	} else if (score>=65 && score<=69){
		usMark="C"
	} else if (score>=70 && score<=74){
		usMark="C+"
	} else if (score>=75 && score<=79){
		usMark="B-"
	} else if (score>=80 && score<=84){
		usMark="B"
	} else if (score>=85 && score<=89){
		usMark="B+"
	} else if (score>=90 && score<=94){
		usMark="B+"
	} else if (score>=95 && score<=100){
		usMark="A"
	}
	alert(`К студенту ${usName} ${usSurname} прикреплена оценка ${usMark}`)
}
do{
	usScores()
}
while(confirm(`сконвертировать оценку для ещё одного студента`))
alert(`The End`);
