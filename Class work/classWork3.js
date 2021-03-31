// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

let idMain_header = document.getElementById('main_header');
idMain_header.innerText = 'FEB-2021';
idMain_header.style.color = 'olive';

// b) робить шириниу елементу ul 400px

let ul = document.getElementsByTagName('ul');
for (let i = 0; i < ul.length; i++) {
    ul[i].style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let linkListWidth = document.getElementsByClassName('linkList');
for (let i = 0; i < linkListWidth.length; i++) {
    linkListWidth[i].style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let listElement2text = document.getElementsByClassName('listElement2');
for (let i = 0; i < listElement2text.length; i++) {
    console.log(listElement2text[i].innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let liBackgroundColor = document.getElementsByClassName('linkList');
for (let liBackgroundColorElement of liBackgroundColor) {
    liBackgroundColorElement.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let ahref = document.getElementsByTagName('a');
for (const ahrefElement of ahref) {
    ahrefElement.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let a = document.getElementsByTagName('a');
// for (let i = 0; i < a.length; i++) {
//     if (a[i].innerText === 'link3') {
//         a[i].style.fontSize = '40px';
//     }
//
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let a = document.getElementsByTagName('a');

// for (const aElement of a) {
//     aElement.classList.add(`element_${aElement.innerText}`);
// }

//спробував теж через простий фор

for (let i = 0; i < a.length; i++) {
    a[i].classList.add(`element_${a[i].innerText}`);

}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// const subHeader = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeader) {
//     subHeaderElement.style.backgroundColor = prompt('Gimme a color');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// for (let i = 0; i < subHeader.length; i++) {
//     if (subHeader[i].innerText === 'content 2 segment') {
//         subHeader[i].style.backgroundColor = prompt('Gimme a color');
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content1 = document.getElementsByClassName('content_1');
// for (const content1Element of content1) {
//     content1Element.innerText = prompt('Gimme some text')
// }

// l) отримати елементи p та змінити їм padding на 20px

// let pes = document.getElementsByTagName('p');
// for (const p of pes) {
//     p.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let text2 = document.getElementsByClassName('text2');
// for (const text2Element of text2) {
// //     text2Element.innerText = 'FEB-2021';
// }
//
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

const content = document.createElement('div');
content.setAttribute('id','content');

const h1 = document.createElement('h1');
h1.innerText = 'Правила бойцовского клуба';

const wrap = document.createElement('div');
wrap.setAttribute('id','wrap');

for (let i = 0; i < rules.length; i++) {
    let rulesDiv = document.createElement('div');
        rulesDiv.innerHTML = `<h2>${rules[i].title}</h2><p>${rules[i].body}</p>`;
    rulesDiv.classList.add('rules',`rule${i+1}`);
    wrap.appendChild(rulesDiv);
}
content.appendChild(h1);
content.appendChild(wrap);
document.body.appendChild(content);


//
// ===========================================================================
