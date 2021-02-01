'use strict';

let money, data;

function start() { //Функция ввода бюджета и даты
    money = +prompt("Ваш бюджет на месяц?", "");
    data = prompt("Введите дату в формате YYYY-MM-DD", "2021-02-01");

    while (isNaN(money) || (money <= 0)) {
        alert("Неправильно введен бюджет");
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = { //Объект, где хранятся все данные
    bank: money, // бюджет
    DataTime: data, //время
    expenses: {}, // 2  статьи обязательных расходов
    OptionalExpenses: {}, // 3 статьи необязательных расходов
    income: [],
    savings: true, // наличие сбережений
    ChoseExpensess: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько это обойдется?");
            if ((typeof (a) != null) && (typeof (b) != null) && (typeof (a) === 'string') && (typeof (b) === 'string') &&
                (a != "") && (b != "") && (a.length < 50)) {
                console.log("All ok!");
                appData.expenses[a] = b;
            } else {
                console.log("Bad result");
                i--;
            }
        };
    },
    detectDayBudget: function () {
        appData.MoneyPerDay = (appData.bank / 30).toFixed();
        alert("Ваш ежедневный бюджет: " + appData.MoneyPerDay);
    },
    detectLevel: function () {
        if (appData.MoneyPerDay < 300) { // функция вывода в консоль уровня дохода
            console.log("Low level of profit")
        } else if ((appData.MoneyPerDay > 300) && (appData.MoneyPerDay < 1000)) {
            console.log("Midium level of profit")
        } else if (appData.MoneyPerDay > 100) {
            console.log("High level of profit")
        }
    },
    checkSavings: function () {
        if (appData.savings) { // функция высчитывания дохода от "Накоплений" в месяц
            let save = +prompt("Какова сумма накоплений?"),
                persent = +prompt("Под какой процент?");
            appData.MonthIncome = ((save * persent) / 100 / 12).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.MonthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.OptionalExpenses[i] = questionOptExpenses;
            console.log(appData.OptionalExpenses);
        }
    },
    checkIncome: function () {
        let item = prompt("Имеются ли у вас дополнительные источники зароботка?(Перечислите через заяптую", "");
        if (!(isNaN(item)) || item == "" || typeof (item) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = item.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        };
        appData.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
    }
}
appData.checkIncome();
//let p = 0;
//while (p < 2){
//  for (let i = 0; i < 2; i++) {
//    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//      b = prompt("Во сколько это обойдется?");
//if ((typeof (a) != null) && (typeof (b) != null) && (typeof (a) === 'string') && (typeof (b) === 'string') &&
//  (a != "") && (b != "") && (a.length<50) ) {
//    console.log("All ok!");
//appData.expenses[a] = b;
// };
// console.log(appData.expenses);
//  p++;
//}          //получаем сумму ежедневного бюджета
appData.savings = confirm("Имеются ли у вас накопления?") //добавляем в объект статью "Накопления"
console.log(appData);
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
} //просмотр объекта appData