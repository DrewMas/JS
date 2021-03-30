// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

// let textIdContent = document.getElementById ('content');
// console.log(textIdContent.innerText);


//    b) отримує текст з блоку з id "rules"

// let textIdRules = document.getElementById('rules');
// console.log(textIdRules.innerText);


// c) замініть текст параграфа з id 'content' на будь-який інший

// let textIdContent = document.getElementById('content');
// textIdContent.innerText = 'Doom structure';
//
//
// // d) замініть текст параграфа з id 'rules' на будь-який інший
//
// let textIdRules = document.getElementById('rules');
// textIdRules.innerText = 'was ist das'
//
//
// //e) змініть кожному елементу колір фону на червоний
//
// let allColor = document.getElementsByTagName('body');
// console.log(allColor);
//
// for (let i = 0; i < allColor.length; i++) {
//     allColor[i].style.backgroundColor = 'darkred';
// }
//
//
// //f) змініть кожному елементу колір тексту на синій
//
// for (let i = 0; i < allColor.length; i++) {
//     allColor[i].style.color = 'royalblue';
// }
//
//
// // g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//
// let idRulesClasses = document.getElementById('rules');
// console.log(idRulesClasses.classList);
//
//
// //h) отримати всі елементи з класом fc_rules
//
// let fc_rulesClassElements = document.getElementsByClassName('fc_rules');
// console.log(fc_rulesClassElements);
//
//
// // i) поміняти колір тексту у всіх елементів fc_rules на червоний
//
// let fc_rulesBackgroundColor = document.getElementsByClassName('fc_rules');
//
// for (let i = 0; i < fc_rulesBackgroundColor.length; i++) {
//     fc_rulesBackgroundColor[i].style.backgroundColor = 'red';
//
// }
//
//
// //2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// //    Вставити цей блок на сторінку
// //
let arrUsers = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// for (let i = 0; i < arrUsers.length; i++) {
//
//     let usersDiv = document.createElement('div');
//     document.body.appendChild(usersDiv);
//     usersDiv.innerHTML = `Name -${arrUsers[i].name}; Age - ${arrUsers[i].age}; Status - ${arrUsers[i].status};<br> Address - ${arrUsers[i].address.country}, ${arrUsers[i].address.city}, ${arrUsers[i].address.street}, ${arrUsers[i].address.houseNumber} <hr>`;
//
// }
//
// //3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// //    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
//


// for (let i = 0; i < arrUsers.length; i++) {
//     let usersDiv = document.createElement('div');
//     document.body.appendChild(usersDiv);
//     usersDiv.innerText = `Name -${arrUsers[i].name}; Age - ${arrUsers[i].age}; Status - ${arrUsers[i].status}`;
//
//     let usersAddresses = document.createElement('div');
//     usersDiv.appendChild(usersAddresses);
//     usersAddresses.innerHTML = `<u>Address: ${arrUsers[i].address.country}, ${arrUsers[i].address.city}, ${arrUsers[i].address.street}, ${arrUsers[i].address.houseNumber} </u>`
//
// }

// for (const user of arrUsers) {
//
//     let divAdress = document.createElement('div');
//     divAdress.innerHTML = '<p>Адреса:</p>';
//
//     const adressValues = Object.values(user.address);
//
//     for (const value of adressValues) {
//         let divAdressItem = document.createElement('div');
//         divAdressItem.innerHTML = `${value}`;
//         divAdress.appendChild(divAdressItem);
//     }
//
//     let userDiv = document.createElement('div');
//
//     userDiv.innerHTML = `
//         Користувач ${user.name} <br>
//         Вік: ${user.age} <br>
//         Статус: ${user.status} <br>`;
//
//     userDiv.appendChild(divAdress);
//     userDiv.innerHTML += '<hr>';
//
//     document.body.appendChild(userDiv);
// }
