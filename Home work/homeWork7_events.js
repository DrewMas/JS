// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".

// let divka = document.getElementById('text');
// let btn = document.getElementById('btn');
// btn.onclick = event => {divka.hidden = !divka.hidden};

//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

// let btn2 = document.getElementById('btn2');
// btn2.onclick = event => {btn2.hidden = true};

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

// let input = document.getElementById('input');
// let btn3 = document.getElementById('btn3');
//
// btn3.onclick = event => {
//     input.value > 17 ? alert('Welcome to 18+') : alert('Enter is not allowed');
//     console.log(input.value);
// }

// - Створіть меню, яке розгортається/згортається при клику

// let listName = document.getElementById('listName');
// let list = document.getElementById('list');
// listName.onclick = event => {
// list.hidden = !list.hidden
// }

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

let comments = [
    {title: 'Comment 1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {title: 'Comment 2', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {title: 'Comment 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {title: 'Comment 4', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
    {title: 'Comment 5', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
]

const mainDivka = document.createElement('div');
mainDivka.innerText = 'List';

comments.forEach(ev => {
    const divka = document.createElement('div');
    const title = document.createElement('h3');
    const body = document.createElement('p');
    const button = document.createElement('button');
    button.innerText = 'Delete';

    button.onclick = () => {
        body.hidden = !body.hidden;
    }

    title.innerText = ev.title;
    body.innerText = ev.body;

    mainDivka.appendChild(divka);
    divka.appendChild(title);
    divka.appendChild(body);
    divka.appendChild(button);
})

document.body.appendChild(mainDivka);

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//


