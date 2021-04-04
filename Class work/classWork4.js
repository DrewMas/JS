// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min) {
//             min = arguments[i];
//         }
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     console.log(`max number = ${max}`);
//     return min;
// }
//
// console.log(`min number = ${minMax(45, 87, 0, -1, 88, 100, 99)}`);


// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

//питає при кожній ітерації, тому можна вибрати в перемішку

// function dynamic(arr) {
//     let dynamicArr = [];
//     for (let arrElement of arr) {
//         for (let item in arrElement) {
//             if (prompt(`What do yo want to return: 'keys' or 'values'`) === 'keys') {
//                 dynamicArr.push(item);
//             } else {
//                 dynamicArr.push(arrElement[item]);
//             }
//         }
//     }
//     return dynamicArr;
// }
//
// console.log(dynamic([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//
// function dynamic(arr) {
//     let dynamicArr = [];
//     if (prompt(`What do you want to get: 'keys' or 'values'`) === 'keys') {
//         for (let arrElement of arr) {
//             for (let item in arrElement) {
//                 dynamicArr.push(item);
//             }
//         }
//         return dynamicArr;
//     }
//     if (!!'keys') {
//         for (let arrElement of arr) {
//             for (let item in arrElement) {
//                 dynamicArr.push(arrElement[item]);
//             }
//         }
//         return dynamicArr;
//     }
// }
//
// console.log(dynamic([{name: 'Dima', age: 13}, {model: 'Camry'}]));


// function getKeys(arr) {
//     let arrOfKeys = [];
//     for (let keys of arr) {
//         for (let key in keys) {
//             arrOfKeys.push(key);
//         }
//     }
//     console.log(arrOfKeys);
// }
//
//
// function getValues(arr) {
//
//     let arrOfValues = [];
//     for (let values of arr) {
//         for (let value in values) {
//             arrOfValues.push(values[value]);
//         }
//     }
//     console.log(arrOfValues);
// }
//
//
// function getDynamic(arrOfObjects, returnType = 'keys') {
//     if (returnType === 'keys') {
//         return getKeys(arrOfObjects);
//
//     } else if (returnType === 'values') {
//         return getValues(arrOfObjects);
//
//     } else {
//         return false;
//     }
// }
//
// getDynamic([{name: 'Dima', age: 13}, {model: 'Camry'}], 'values');


// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


// function swap(arr, i) {
//     if(i < arr.length){
//         const swapper = arr[i];
//         arr[i] = arr [i+1]
//         arr[i+1] = swapper;
//
//         console.log(arr);
//     }
// }
// swap([9,8,0,4],0)


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// function shift(arr) {
//     let zeroes = [];
//     let numbers = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             zeroes.push(0);
//         } else {
//             numbers.push(arr[i]);
//         }
//     } return numbers.concat(zeroes);
//
// }
//
// console.log(shift([1, 0, 6, 0, 3]));
// console.log(shift([0, 1, 2, 3, 4]));
// console.log(shift([0, 0, 1, 0]));



// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// function spacesCorrector(name) {
//     name = name.trim();
//     name = name.replace(/ +/g, ' ');
//     console.log(name);
// }
//
// spacesCorrector('    Harry       Potter      ');
// spacesCorrector('    Ron       Weasley      ');
// spacesCorrector('    Hermione       Granger      ');

// ============================================================================================

