// Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// Вывести в консоль произведение цифр этого числа
let numArray = Array.from(String(num)).map((i) => Number(i));
let result = numArray.reduce((a, b) => a * b);
console.log(result);
