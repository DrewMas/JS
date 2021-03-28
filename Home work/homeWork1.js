// // --створити масив та вивести його в консоль:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let array1 = [1, 2, 3, 4, 5];
// console.log(array1);
//
// let array2 = ['Vasya', 'Petya', 'Kolya', 'Olya', 'Sasha'];
// console.log(array2);
//
// let array3 = [1, 'Dima', true, 2, "Katya", false];
// console.log(array3);
//
//
// //-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let array4 = [];
// array4[0] = 1;
// array4[1] = 2;
// array4[2] = 3;
// array4[3] = 4;
// array4[4] = 5;
// console.log(array4);


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>довільний текст</div>`);
// }


// // //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// //
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i} довільний текст</div>`)
// }


//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20) {
//     document.write(`<h1>довільний текст</h1>`);
//     i++;
// }
//
// //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>довільний текст ${i}</h1> `);
//     i++;
// }


//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i <array5.length; i++) {
//     console.log(array5[i]);
// }


//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let array6 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//
//
// i=0;
// while (i < array6.length) {
//     console.log(array6[i]);
//     i++;
// }


// //
// // // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let array7 = [1, true, 2, false, 3, 'hello', 4, 'world', 5, true];
//
// for (const array7Element of array7) {
//     console.log(array7Element);
// }


//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array7 = [1, true, 2, false, 3, 'hello', 4, 'world', 5, 'true'];

// for (let i = 0; i < array7.length; i++) {
//     if (typeof array7[i] === "boolean") {
//
//         console.log(array7[i]);
//     }
//
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array7 = [1, true, 2, false, 3, 'hello', 4, 'world', 5, 'true']; // через while не працює, це норм???
// i = 0;
// while (i < array7.length) {
//     if (typeof array7[i] === "number") {
//         console.log(array7[i]);
//         i++;
//     }
// }


//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array7 = [1, true, 2, false, 3, 'hello', 4, 'world', 5, 'true'];
//
// for (const array7Element of array7) {
//     if (typeof array7Element === 'string') {
//         console.log(array7Element);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr.push(1, 2, 3, 4, 5, true, false, 'hello', 'world', 'okten');
//
// for (let arrElement of arr) {
//     console.log(arrElement);
// }
//
// // я нз як це малось на увазі правильно, бо в завчанні говоритсья, що до індекса звертатись, то може так:
//
// let arr2 = [];
// arr2[0] = 'hello';
// arr2[1] = 'world';
// arr2[2] = 'okten';
// arr2[3] = true;
// arr2[4] = false;
// arr2[5] = 1;
// arr2[6] = 2;
// arr2[7] = 3;
// arr2[8] = 4;
// arr2[9] = 5;
//
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }


//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
//     document.write(`<br>`);
// }


//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


// let i = 0;
// while (i < 100) {
//     console.log(i);
//     document.write(i);
//     document.write(`<br>`);
//     i++
// }


//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(i + `<br>`);
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i);
//         document.write(`<br>`)
//     }
// }


//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// let i = 0;
// while (i < 100) {
//     console.log(i);
//     document.write(i);
//     document.write(`<br>`);
//     i +=2;
// }


//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i < 100; i += 2) {
//     console.log(i);
//     document.write(i + `<br>`);
// }


//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


// for (let min = 0; min < 60; min++) {
//     for (let sec = 0; sec < 60; sec++) {
//         console.log(min + ':' + sec);
//         if (min === 2 && sec === 0) {
//             min = 60;
//             break;
//         }
//     }
// }


// !!!!!!!! чесно признаюсь, що це ми побачили код оного з менторів і використали логіку з переприсвоюванням значень, бо без цього зупинялось на 1 год 59 сек і виводилось окремо((

// по аналогії буде зроблено наступне завдання, тільки не зміг перевірити чи працює норм, бо ноут висне від кількості даних:

//- Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hours = 0; hours < 24; hours++) {
//     for (let min = 0; min < 60; min++) {
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(hours + ':' + min + ':' + sec);
//             if (hours === 2 && min === 20 && sec === 0) {
//                 hours = 24;
//                 min = 60;
//                 break;
//             }
//         }
//     }
// }

