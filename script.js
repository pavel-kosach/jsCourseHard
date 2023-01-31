"use strict";
// Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = "ru";
let rusWeek = "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.";
let engWeek = "Monday, tuesday, wednesday, thursday, friday, saturday, sunday";

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.
// a) через if,
 if (lang == "ru") {
  console.log(rusWeek);
 } else if (lang == "en") {
  console.log(engWeek);
 } else {
   console.log("Значение lang не соответствует en/ru");
 } 

// b) через switch-case
switch (true) {
  case lang == "ru":
    console.log(rusWeek);
    break;
  case lang == "en":
    console.log(engWeek);
    break;
  default:
    console.log("Значение lang не соответствует en/ru");
}

// c) через многомерный массив без ифов и switch.
let dayArray = {
  ru: ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье."],
  en: ["Monday, tuesday, wednesday, thursday, friday, saturday, sunday"], 
}
console.log(dayArray[lang][0]);


// У нас есть переменная namePerson.
// Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, 
// с любым другим значением вывести в консоль “студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
let namePerson = "Александр";
namePerson == "Артем" ? console.log("директор") : namePerson == "Александр" ? console.log("преподаватель") : console.log("студент");
