"use strict";

// Создать массив week и записать в него дни недели в виде строк
let week = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Вывести на экран все дни недели
document.write(String(week) + "\n");

// Каждый из них с новой строчки
for (let i = 0; i < 7; i++) {
  document.write(week[i] + "\n");
}

// Выходные дни - курсивом
const weekend = week.slice(5);
document.write(String(weekend).italics() + "\n");

// Текущий день - жирным шрифтом(использовать объект даты)
let nowTime = new Date();
let today = nowTime.getDay();
const sunday = week.slice(6);
const monday = week.slice(0, 1);
alert(monday);
let weekFromSunToSat = week;
weekFromSunToSat = week.unshift(sunday);
console.log(weekFromSunToSat);
