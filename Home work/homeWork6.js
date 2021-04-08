//
// 1) Створити масив з 20 чисел та:

// const arr = [25, 78, 56, 15, 63, 35, 21, 14, 1, 8, 4, 13, 12, 35, 79, 85, 45, 14, 2, 47];


//     a) відсортувати його від меншого до більшого.
// let numbers1 = arr.sort((a, b) => a - b);
// console.log(numbers1);

//     // b) відсортувати його від більшого до меншого.
//
// let numbers2 = arr.sort((a, b) => b - a);
// console.log(numbers2);
//
// //     c) Відфілтрувати числа які є кратними 3.
//
// let numbers3 = arr.filter((value => value % 3 === 0));
// console.log(numbers3);
//
// // d) Відфілтрувати числа які є більшими за 10.
//
// let numbers4 = arr.filter((value =>  value > 10));
// console.log(numbers4);
//
// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
//
// arr.forEach(value => document.write(`${value}<br>`));


// f) За допомогою map збільшити кожен елемент в масиві в три рази.

// let numbers5 = arr.map(value => value * 3)
// console.log(numbers5);

//  g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let numbers6 = arr.reduce((acc, currentValue) => {
//     return acc + currentValue;
// })
// console.log(numbers6);


// 2) Створити масив з 20 стрічок та:

// const str = ['hello', 'world', 'okten', 'owu', 'filter', 'sort', 'map', 'reduce', 'once', 'every', 'array', 'string', 'mentor', 'js', 'node', 'react', 'angular', 'vue', 'native', 'scrum'];

// a) Відсортувати його в алфавітному порядку

// let str1 = str.sort();
// console.log(str1);


// b) Відсортувати в зворотньому порядку

// let str2 = str.sort(((a, b) => {
//     if (a < b) {
//         return 1;
//     }
//     return -1;
// }));
// console.log(str2);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// let str3 = str.filter(value => value.length > 4);
// console.log(str3);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//
// let str4 = str.map(value => `Sam says ${value}`);
// console.log(str4);

//
// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// console.log(users.sort((a, b) => a.age - b.age));
// console.log(users.sort((a, b) => b.age - a.age));

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// console.log(users.sort((a, b) => a.name.length - b.name.length));
// console.log(users.sort((a, b) => b.name.length - a.name.length));

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// let usersId = users.map((value, index) => {
//     let newUsers = {};
//     newUsers.id = index +1;
//     newUsers.name = value.name;
//     newUsers.age = value.age;
//     newUsers.isMarried = value.isMarried;
//     return newUsers;
// });
// console.log(usersId);
// console.log(users);

// d) відсортувати його за індентифікатором

// let idSort = usersId.sort((a, b) => b.id - a.id)
// console.log(idSort);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)


let apartment = users.reduce((acc, value) => {
    if (value.isMarried === true) {
        value.apartment = `You've got an apartment, congratulation`;
        acc.push(value);
    }

    return acc;
}, []);

console.log(apartment);

