'use strict';

var money = +prompt("Ваш бюджет на месяц?", ""),
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

alert(money);
alert(time);

let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
	question2 = prompt("Во сколько обойдется?", "");


var appData = {
	budget: money,
	data: time,
	expenses: {
		answerForQuestion1: question1,
		answerForQuestion2: question2
	},
	optionalExpenses: {},
	income: [],
	savings: false
};


alert(question1);
alert(question2);

var budget = money / 30;

alert("Бюджет на 1 день:" + " " + budget);


console.log(appData);
console.log(budget);