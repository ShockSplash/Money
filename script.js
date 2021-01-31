'use strict';
let money = prompt("Ваш бюджет на месяц?",""),
 data = prompt("Введите дату в формате YYYY-MM-DD","2021-02-01"),
  appData={
    bank: money,
    DataTime: data,
    expenses: {},
    OptionalExpenses: {},
    income: [],
    savings: false
};
let a1=prompt("Введите обязательную статью расходов в этом месяце",""),
a2=prompt("Во сколько это обойдется?"),
a3=prompt("Введите обязательную статью расходов в этом месяце",""),
a4=prompt("Во сколько это обойдется?");
appData.expenses.a1=a2;
appData.expenses.a3=a4;
alert("Ваш ежедневный бюджет: "+appData.bank/30);
console.log(appData.expenses.a1);
console.log(appData.expenses.a3);

