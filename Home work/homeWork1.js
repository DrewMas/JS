//- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
let str1 = 'hello';
console.log(str1);
document.write(str1);
alert(str1);

let str2 = 'owu';
console.log(str2);
document.write(str2);
alert(str2);

let str3 = 'com';
console.log(str3);
document.write(str3);
alert(str3);

let str4 = 'ua';
console.log(str4);
document.write(str4);
alert(str4);

let str5 = 1;
console.log(str5);
document.write(str5);
alert(str5);

let str6 = 10;
console.log(str6);
document.write(str6);
alert(str6);

let str7 = -999;
console.log(str7);
document.write(str7);
alert(str7);

let str8 = 123;
console.log(str8);
document.write(str8);
alert(str8);

let str9 = 3.14;
console.log(str9);
document.write(str9);
alert(str9);

let str10 = 2.7;
console.log(str10);
document.write(str10);
alert(str10);

let str11 = 16;
console.log(str11);
document.write(str11);
alert(str11);

let str12 = true;
console.log(str12);
document.write(str12);
alert(str12);

let str13 = false;
console.log(str13);
document.write(str13);
alert(str13);

// // - переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write
str1 = 'hi';
console.log(str1);
document.write(str1);
alert(str1);

str2 = 'okten';
console.log(str2);
document.write(str2);
alert(str2);

str3 = 'seznam';
console.log(str3);
document.write(str3);
alert(str3);

str4 = 'pl';
console.log(str4);
document.write(str4);
alert(str4);

str5 = 2;
console.log(str5);
document.write(str5);
alert(str5);

str6 = 11;
console.log(str6);
document.write(str6);
alert(str6);

str7 = -1000;
console.log(str7);
document.write(str7);
alert(str7);

str8 = 124;
console.log(str8);
document.write(str8);
alert(str8);

str9 = 3.15;
console.log(str9);
document.write(str9);
alert(str9);

str10 = 3.7;
console.log(str10);
document.write(str10);
alert(str10);

str11 = 18;
console.log(str11);
document.write(str11);
alert(str11);

str12 = false;
console.log(str12);
document.write(str12);
alert(str12);

str13 = true;
console.log(str13);
document.write(str13);
alert(str13);

//- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write
const number1 = 1;
const number2 = 2;
const number3 = 3;

console.log(number1);
console.log(number2);
console.log(number3);

document.write(number1);
document.write(number2);
document.write(number3);

alert(number1);
alert(number2);
alert(number3);


const str14 = 'four';
const str15 = 'five';
const str16 = 'six';

console.log(str14);
console.log(str15);
console.log(str16);

document.write(str14);
document.write(str15);
document.write(str16);

alert(str14);
alert(str15);
alert(str16);

//- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let lastName = prompt('Введіть, будь ласка, своє прізвище');
let name = prompt('Введіть, будь ласка, своє імя');
let fathersName = prompt('Введіть, будь ласка, по-батькові');

console.log(lastName);
console.log(name);
console.log(fathersName);

document.write(lastName);
document.write(name);
document.write(fathersName);

alert(lastName);
alert(name);
alert(fathersName);

//- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = lastName + ' ' + name + ' ' + fathersName;
console.log(person);

// - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
let lastName2 = prompt('Введіть, будь ласка, прізвище матері');
let name2 = prompt('Введіть, будь ласка, імя матері');
let fathersName2 = prompt('Введіть, будь ласка, по-батькові матері');

let lastName3 = prompt('Введіть, будь ласка, прізвище батька');
let name3 = prompt('Введіть, будь ласка, імя батька');
let fathersName3 = prompt('Введіть, будь ласка, по-батькові батька');

let lastName4 = prompt('Введіть, будь ласка, прізвище брата чи сестри');
let name4 = prompt('Введіть, будь ласка, імя брата чи сестри');
let fathersName4 = prompt('Введіть, будь ласка, по-батькові брата чи сестри');

let person2 = lastName2 + ' ' + name2 + ' ' + fathersName2;
let person3 = lastName3 + ' ' + name3 + ' ' + fathersName3;
let person4 = lastName4 + ' ' + name4 + ' ' + fathersName4;

console.log(person2);
console.log(person3);
console.log(person4);

//- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let number4 = +prompt('Введіть перше число');
let number5 = +prompt('Введіть друге число');
let number6 = +prompt('Введіть третє число');

console.log(number4);
console.log(number5);
console.log(number6);

//- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let number7 = parseInt(prompt('Введіть перше число'));
let number8 = parseInt(prompt('Введіть друге число'));
let number9 = parseInt(prompt('Введіть третє число'));
let number10 = parseInt(prompt('Введіть четверте число'));

let result = number7 + number8 + number9 + number10;
console.log(result);

//- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
let number11 = parseFloat(prompt('Введіть перше число'));
let number12 = parseFloat(prompt('Введіть друге число'));
let number13 = parseFloat(prompt('Введіть третє число'));

let result2 = number11 + number12 + number13;
console.log(result2);

//- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

let number14 = Math.round(parseFloat(prompt('Enter a first number')));
let number15 = Math.round(parseFloat(prompt('Enter a second number')));
let number16 = Math.round(parseFloat(prompt('Enter a third number')));

let result3 = number14 + number15 + number16;
console.log(result3);


// - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let number17 = prompt('Enter first number');
let number18 = prompt('Enter second number');

console.log(Math.pow(number17, number18));

//- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.
let a = 100;
let b = '100';
let c = true;
let d = undefined;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

//- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.

let a1 = 5 < 6;
let a2 = 5 > 6;
let a3 = 5 === 6;
let a4 = 5 >= 6;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

let b1 = 10 === 10;
let b2 = 10 >= 10;
let b3 = 10 > 10;
let b4 = 10 < 10;
let b5 = 10 != 10;
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);

let c1 = 123 === '123';
let c2 = 123 == '123';

console.log(c1);
console.log(c2);