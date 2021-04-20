// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// const textArea = document.getElementById('textArea');
//
// textArea.oninput = () => {
//     localStorage.setItem('text', textArea.value);
// }
//
// textArea.value = localStorage.getItem('text');

//
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

const text = document.getElementById('textInput');
const status = document.getElementById('status');
const radio1 = document.getElementById('radioInput');
const radio2 = document.getElementById('radioInput2');

text.oninput = () => {
    localStorage.setItem('text', text.value);
}
text.value = localStorage.getItem('text');

status.onclick = () => {
    localStorage.setItem('check', status.checked);
}
status.checked = JSON.parse(localStorage.getItem('check'));



radio1.onclick = () => {
    localStorage.setItem('radio1', radio1.checked);
}
radio1.checked = JSON.parse(localStorage.getItem('radio1'));

// radio2.onclick = () => {
//     localStorage.setItem('radio2', radio2.checked);
// }
// radio2.checked = JSON.parse(localStorage.getItem('radio2'));








//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

