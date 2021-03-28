// //1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = 'true';
//
// console.log(typeof str, typeof num, typeof flag, typeof txt);

//2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
//
// console.log(a1, a2, a3, a4, a5);

//3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
//
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);

//4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = height * width;
//
// console.log(s);

//5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let v = Math.PI * heightC * dC;
//
// console.log(v);

//6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(m, 2) + Math.pow(n, 2));
//
// console.log(k);

//7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log
// let str = 'Hello world';
//
// document.write(str);
// console.log(str);
// alert(str);

//8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// alert('Масний Андрій Іванович\n26 років\nХоббі: JS, музика, футбол');

//9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

// let str1 = 'Хто';
// let str2 = 'ти';
// let str3 = 'такий?';
// let concatenation = str1 + ' ' + str2 + ' ' + str3;
//
// document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); // 205 - JS прирівняє 5 до стрічки і додасть 2 стрічки
// document.write(str - a + "<br/>"); // 15 - бо так Сергій казав :)
// document.write(str * "2" + "<br/>"); // 40 - при множенні JS шарить, що це цифри і перемножує їх, так як стрічки не можна перемножити
// document.write(str / 2 + "<br/>"); // 10 - для стрічок ділення немає, тому JS шарить, що це цифри і ділить їх


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?

// parseInt("3.14") // 3 - parseInt виводить тільки цілі числа
// parseInt("-7.875") // -7 - аналогічно до попереднього, але тут воно теж з від'ємними числами працює
// parseInt("435") // 435 - це ціле число
// parseInt("Вася") // NaN - "Вася" це не число


//  12. С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже

// let str = prompt('Enter something');  // можливо неправильно зрозумів, що тут треба зробити
// console.log(str + ' ' + 'ho-ho');

//13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// let number_1 = +prompt('Enter first number');
// let number_2 = +prompt('Enter second number');
//
// alert(number_1+number_2);

//14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// let firstName = prompt("Введіть своє ім'я ");
// let secondName = prompt('Введіть своє прізвище');
// let age = +prompt('Ввежіть свій вік');
//
// alert(`Доброго вечора ${firstName} ${secondName}, мої вітання, що Вам виповнилось ${age}`);


// BONUS

//1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let number1 = +prompt('Hey man, gimme first number');
// let number2 = +prompt('Now gimme second number');
// let number3 = +prompt('Yo, gimme the last one');
//
// if (number1 < number2 && number1 < number3 && number2 < number3) {
//     console.log(number1, number2, number3);
// }
// if (number1 < number2 && number1 < number3 && number2 > number3) {
//     console.log(number1, number3, number2);
// }
// if (number1 > number2 && number2 > number3 && number1 > number3) {
//     console.log(number3, number2, number1);
// }
// if (number1 > number2 && number2 < number3 && number1 > number3 ) {
//     console.log(number2, number3, number1);
// }
// if (number2 < number1 && number2 < number3 && number1 < number3) {
//     console.log(number2, number1, number3);
// }
// if (number3 < number1 && number3 < number2 && number1 < number2) {
//     console.log(number3, number1, number2);
// }


//2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let trafficLight = prompt('Enter traffic light color in english');
//
// switch (trafficLight) {
//     case 'green':
//         alert('Go');
//         break;
//     case 'yellow':
//         alert('Wait');
//         break;
//     case 'red':
//         alert('Stop');
//         break;
//
//     default:
//         alert('Do whatever you want');
// }

// let color = prompt('Tell me traffic light color in Englsih');
//
// if (color === 'red') {
//     alert('Stop, you are not immortal');
//    } else if (color === 'yellow') {
//     alert('Wait, if you wanna stay alive')
// } else if (color === 'green') {
//     alert("Go go go, you've got 10 sec to cross this f%cking street")
// } else {
//     alert('Meh...do whatever you want')
// }

//3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!


// let trafficLight = confirm("Is a traffic light working?") //  я нз чи так можна, якщо "та", то круто, якщо ні, то можна просто прописати else
// if (trafficLight === true) {
//     let color = prompt('What traffic light color do you see?');
//     let isRoadClear = confirm('Is road clear?');
//
//     if (color === 'green' && isRoadClear === true) {
//         alert('Go ahead');
//     } else if (color === 'green' && isRoadClear === false) {
//         alert('Wait for those motherf%ckers to drive by');
//     } else if (color === 'yellow' && isRoadClear === false) {
//         alert('It is better to wait');
//     } else if (color === 'yellow' && isRoadClear === true) {
//         alert('Keep waiting');
//     } else if (color === 'red' && isRoadClear === true) {
//         alert('I would recommend you to stay');
//     } else if (color === 'red' && isRoadClear === false) {
//         alert('Stay still');
//     }
// } else {
//     alert('Do whatever you want')
// }
//