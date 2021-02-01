'use strict';

let money, data;

function start() {                                     //Функция ввода бюджета и даты
    money = +prompt("Ваш бюджет на месяц?", "");
    data = prompt("Введите дату в формате YYYY-MM-DD", "2021-02-01");

    while (isNaN(money) || (money <= 0)) {
        alert("Неправильно введен бюджет");
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {                               //Объект, где хранятся все данные
    bank: money,                              // бюджет
    DataTime: data,                           //время
    expenses: {},                             // 2  статьи обязательных расходов
    OptionalExpenses: {},                     // 3 статьи необязательных расходов
    income: [],
    savings: true                             // наличие сбережений
};

function ChoseExpensess() {                           //Добавляем 2 статьи обязательных расходов
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
}
ChoseExpensess();
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
//}
appData.MoneyPerDay = (appData.bank / 30).toFixed();           //получаем сумму ежедневного бюджета

function detectDayBudget() {                                   // функция вывода ежедневного бюджета
    alert("Ваш ежедневный бюджет: " + appData.MoneyPerDay);
};
detectDayBudget();

function detectLevel() {
    if (appData.MoneyPerDay < 300) {                            // функция вывода в консоль уровня дохода
        console.log("Low level of profit")
    } else if ((appData.MoneyPerDay > 300) && (appData.MoneyPerDay < 1000)) {
        console.log("Midium level of profit")
    } else if (appData.MoneyPerDay > 100) {
        console.log("High level of profit")
    }
};
detectLevel();

appData.savings = confirm("Имеются ли у вас накопления?")         //добавляем в объект статью "Накопления"

function checkSavings() {
    if (appData.savings) {                                        // функция высчитывания дохода от "Накоплений" в месяц
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");
        appData.MonthIncome = ((save * persent) / 100 / 12).toFixed();
        alert("Доход в месяц с вашего депозита: " + appData.MonthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {                                      // функция, добавляющая в объект appData 2 статьи необязательных расходов
    for (let i = 1; i < 4; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.OptionalExpenses[i] = questionOptExpenses;
        console.log(appData.OptionalExpenses);
    }
}
chooseOptExpenses();
console.log(appData);                                              //просмотр объекта appData