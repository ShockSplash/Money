'use strict';
let money = +prompt("Ваш бюджет на месяц?", ""),
    data = prompt("Введите дату в формате YYYY-MM-DD", "2021-02-01"),
    appData = {
        bank: money,
        DataTime: data,
        expenses: {},
        OptionalExpenses: {},
        income: [],
        savings: false
    };
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько это обойдется?");
    if ((typeof (a) != null) && (typeof (b) != null) && (typeof (a) === 'string') && (typeof (b) === 'string') &&
        (a != "") && (b != "") && (a.length<50) ) {
            console.log("All ok!");
        appData.expenses[a] = b;
    }else{
        console.log("Bad result");
        i--;
    }
};
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
appData.MoneyPerDay=appData.bank/30;
alert("Ваш ежедневный бюджет: " + appData.MoneyPerDay);
if(appData.MoneyPerDay<300){
    console.log("Low level of profit")
}else if((appData.MoneyPerDay > 300 ) && (appData.MoneyPerDay < 1000)){
    console.log("Midium level of profit")
}else if(appData.MoneyPerDay>100){
    console.log("High level of profit")
}
