"use strict";

let checker = "Индекс, с которого начинать извлечение (нумерация начинается с нуля). Если аргумент отрицателен, то трактуется как str.length + beginIndex (например, если beginIndex равен -3, то он трактуется как str.length - 3). Если beginIndex не является числом при проверке Number(beginIndex), он трактуется как 0.";

function checkString (str) {
  if (typeof str !== "string") {
    console.log("передана не строка");
  } else if (typeof str == "string") {
    str.trim();
  } else {
    console.log("smth went wrong");
  }

  if (str.length > 30) {
    str = str.slice(0, 30);
    console.log(str + "...");
  }
}

checkString (checker);