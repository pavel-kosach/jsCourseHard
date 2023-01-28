// Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// Вывести в консоль произведение цифр этого числа
let numArray = Array.from(String(num)).map((i) => Number(i));
let result = numArray.reduce((a, b) => a * b);
console.log(result);

// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
result **= 3;
console.log(result);

// Вывести в консоль первые 2 цифры полученного числа
let resultArray = Array.from(String(result)).map((i) => Number(i));
console.log(resultArray[0], resultArray[1]);

// resultArrayNumbersRemoved = resultArray.splice(2);
