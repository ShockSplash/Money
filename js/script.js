'use strict';
let startСalculation = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expenses = document.getElementsByClassName('expenses')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses = document.getElementsByClassName('optionalexpenses')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    income = document.getElementsByClassName('income')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavings = document.getElementsByClassName('monthsavings')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings = document.getElementsByClassName('yearsavings')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];



let expensesItem = document.getElementsByClassName('expenses-item'),
    Aprove1 = document.getElementsByTagName('button')[0],
    Aprove2 = document.getElementsByTagName('button')[1],
    calculate = document.getElementsByTagName('button')[2],
    inputOptionalExpenses = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'), //поле необязательных расходов
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePersent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value'),
    ExpensesItemBtn = document.getElementById('ExpensesItemBtn');


let money, data;


startСalculation.addEventListener('mouseenter', function () {
    startСalculation.style.backgroundColor = '#0b99db';
});
startСalculation.addEventListener('mouseleave', function () {
    startСalculation.style.backgroundColor = '#79cbf1';
});
Aprove1.addEventListener('mouseenter', function () {
    Aprove1.style.backgroundColor = '#0b99db';
});
Aprove1.addEventListener('mouseleave', function () {
    Aprove1.style.backgroundColor = '#79cbf1';
});
Aprove2.addEventListener('mouseenter', function () {
    Aprove2.style.backgroundColor = '#0b99db';
});
Aprove2.addEventListener('mouseleave', function () {
    Aprove2.style.backgroundColor = '#79cbf1';
});
calculate.addEventListener('mouseenter', function () {
    calculate.style.backgroundColor = '#0b99db';
});
calculate.addEventListener('mouseleave', function () {
    calculate.style.backgroundColor = '#79cbf1';
});
startСalculation.addEventListener('click', function () {
    data = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-11");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || (money <= 0)) {
        alert("Неправильно введен бюджет");
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.bank = money;
    appData.DataTime = data;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(data)).getFullYear();
    month.value = new Date(Date.parse(data)).getMonth() + 1;
    day.value = new Date(Date.parse(data)).getDate() + 1;
})
Aprove1.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a) != null) && (typeof (b) != null) && (typeof (a) === 'string') && (typeof (b) === 'string') &&
            (a != "") && (b != "") && (a.length < 50)) {
            console.log("All ok!");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("Bad result");
            i--;
        }
    };
    expensesValue.textContent = sum;
});
Aprove2.addEventListener('click', function () {
    for (let i = 0; i < inputOptionalExpenses.length; i++) {
        let questionOptExpenses = inputOptionalExpenses[i].value;
        appData.OptionalExpenses[i] = questionOptExpenses;
        optionalexpensesValue.textContent += appData.OptionalExpenses[i] + " ";
    }
});
calculate.addEventListener('click', function () {
    if (appData.bank != undefined) {
        appData.MoneyPerDay = (appData.bank / 30).toFixed();
        dayBudgetValue.textContent = appData.MoneyPerDay;
        if (appData.MoneyPerDay <= 300) { // функция вывода в консоль уровня дохода
            levelValue.textContent = "Низкий уровень дохода"
        } else if ((appData.MoneyPerDay > 300) && (appData.MoneyPerDay < 1800)) {
            levelValue.textContent = "Средний уровень дохода"
        } else if (appData.MoneyPerDay >= 1800) {
            levelValue.textContent = "Высокий уровень дохода"
        }
    } else {
        levelValue.textContent = "Произошла ошибка!(Нажмите начать расчет)";
    };
});
chooseIncome.addEventListener('change', function () {
    let item = chooseIncome.value;
    appData.income = item.split(', ');
    incomeValue.textContent = appData.income;
});
checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        chooseSum.value = "";
        choosePersent.value = "";
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});
chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sumday = chooseSum.value,
            percentDay = choosePersent.value;
        appData.MonthIncome = ((sumday * percentDay) / 100 / 12).toFixed(1);
        appData.YearIncome = ((sumday * percentDay) / 100).toFixed(1);
        monthsavingsValue.textContent = appData.MonthIncome;
        yearsavingsValue.textContent = appData.YearIncome;
    }
});
choosePersent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sumday = +chooseSum.value,
            percentDay = +choosePersent.value;
        appData.MonthIncome = ((sumday * percentDay) / 100 / 12).toFixed(1);
        appData.YearIncome = ((sumday * percentDay) / 100).toFixed(1);
        monthsavingsValue.textContent = appData.MonthIncome;
        yearsavingsValue.textContent = appData.YearIncome;
    }
});
let appData = { //Объект, где хранятся все данные
    bank: money, // бюджет
    DataTime: data, //время
    expenses: {}, // 2  статьи обязательных расходов
    OptionalExpenses: {}, // 3 статьи необязательных расходов
    income: [],
    savings: false // наличие сбережений
}