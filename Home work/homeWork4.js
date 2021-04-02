//
// 1) створити функцію яка приймає масив та виводить його

// function arr(array) {
//     console.log(array)
// }
//
// arr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function random(max, min, length) {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * (max - min) + min));
//     }
//     console.log(arr);
// }
//
// random(10, 1, 5)

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numberMin(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//         return (a);
//     }
//     if (b < c && b < a) {
//         console.log(b);
//         return (b);
//     }
//     if (c < b && c < a) {
//         console.log(c);
//         return (c);
//     }
// }
//
// numberMin(5, 2, 9);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numberMax(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//         return (a);
//     }
//     if (b > c && b > a) {
//         console.log(b);
//         return (b);
//     }
//     if (c > a && c > b) {
//         console.log(c);
//         return (c);
//     }
// }
//
// numberMax(3, 8, 1);


// 5) створити функцію яка повертає найбільше число з масиву

// function arrMax(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// console.log(arrMax([10, 44, 8, 5, 1, 7, 46, 54, 64, 6, 4]));


// 6) створити функцію яка повертає найменьше число з масиву

// function arrMin(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }return min;
// }
// console.log(arrMin([10, 44, 8, 5, 1, 7, 46, 54, 64, 6, 4]));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let numbersSum = [10, 44, 8, 5, 1, 7, 46, 54, 64, 6, 4];
//
//
// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
//
// console.log(sum([10, 44, 8, 5, 1, 7, 46, 54, 64, 6, 4]));


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function average(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]/arr.length;
//     }
//     return sum;
// }
// console.log(average([10, 44, 8, 5, 1, 7, 46, 54, 64, 6, 4]));


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// let users = [
//     {
//         name: 'Dima',
//         age: 13
//     },
//     {
//         model: 'Camry'
//     }
// ];

// function getKeys(arr) {
//     let arrOfKeys = [];
//     for (let keys of arr) {
//         for (let key in keys) {
//             arrOfKeys.push(key);
//         }
//     }
//     return arrOfKeys;
// }
//
// let users = getKeys([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(users);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function getValues(arr) {
//
//     let arrNew = [];
//     for (let values of arr) {
//         for (let value in values) {
//             arrNew.push(values[value]);
//         }
//     }
//     return arrNew;
// }
//
// let users = getValues([{name: 'Dima', age: 13}, {model: 'Camry'}])
// console.log(users);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
//


// function newArr(arrA, arrB) {
//     let newArr = [];
//     for (let i = 0; i < arrA.length; i++) {
//         newArr.push(arrA[i] + arrB[i]);
//     }
//     return newArr;
// }
//
// console.log(newArr([1, 2, 3, 4], [2, 3, 4, 5]));


//
// ============================================================================================

