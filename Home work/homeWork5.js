// -  Створити функцію конструктор для об'єкту який описує теги


// function Tag(tagName, tagDescription, titleOfAttribute1, actionOfAttribute1, titleOfAttribute2, actionOfAttribute2) {
//     this.tagName = tagName;
//     this.tagDescription = tagDescription;
//     this.tagAttributes = [
//         {title: titleOfAttribute1, action: actionOfAttribute1},
//         {title: titleOfAttribute2 = 'no other attribute', action: actionOfAttribute2 = 'no other attribute'}
//     ]
// }
//
// let a = new Tag('a', 'Тег <a> предназначен для создания ссылок',
//     'href', 'Задает адрес документа, на который следует перейти',
//     'target', 'Имя окна или фрейма, куда браузер будет загружать документ');
// console.log(a);
//
// let div = new Tag('div', 'Элемент <div> является блочным элементом',
//     'align', 'Задает выравнивание содержимого тега <div>', 'title',
//     'Добавляет всплывающую подсказку к содержимому.');
// console.log(div);
//
// let h1 = new Tag('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня',
//     'align', 'Определяет выравнивание заголовка');
// console.log(h1);
//
// let span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа',
//     'class', 'Задает стилевой класс', 'style',
//     'Применяется для определения стиля элемента с помощью правил CSS');
// console.log(span);
//
// let input = new Tag('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     'src', 'Адрес графического файла для поля с изображением', 'value', 'Значение элемента');
// console.log(input);
//
// let form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице','name', 'Имя формы',
//     'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные');
// console.log(form);
//
// let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
//     'label', 'Указание метки пункта списка', 'disabled', 'Заблокировать для доступа элемент списка');
// console.log(option);
//
// let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     'accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш', 'form',
//     'Связывает список с формой');
// console.log(select);


// -  Створити класс  для об'єкту який описує теги


// class Tag {
//     constructor(tagName, tagDescription, tagAttributes) {
//         this.tagName = tagName;
//         this.tagDescription = tagDescription;
//         this.tagAttributes = tagAttributes;
//     }
// }
//
// let a = new Tag ('a', 'Тег <a> предназначен для создания ссылок',
//     [{Title:'href', Action: 'Задает адрес документа, на который следует перейти'},
//         {Title: 'target',Action: 'Имя окна или фрейма, куда браузер будет загружать докумен'}]);
// console.log(a);
//
// let div = new Tag('div', 'Элемент <div> является блочным элементом',
//     [{Title: 'align', Action: 'Задает выравнивание содержимого тега <div>'}, {Title: 'title',
//     Action: 'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(div);
//
// let h1 = new Tag('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня',
//     [{Title:'align', Action:'Определяет выравнивание заголовка'}]);
// console.log(h1);
//
// let span = new Tag('span', 'Тег <span> предназначен для определения строчных элементов документа',
//     [{Title:'class', Action:'Задает стилевой класс'}, {Title:'style',
//     Action:'Применяется для определения стиля элемента с помощью правил CSS'}]);
// console.log(span);
//
// let input = new Tag('input', 'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     [{Title:'src', Action:'Адрес графического файла для поля с изображением'}, {Title:'value', Action:'Значение элемента'}]);
// console.log(input);
//
// let form = new Tag('form', 'Тег <form> устанавливает форму на веб-странице',[{Title:'name', Action:'Имя формы'},
//     {Title:'accept-charset', Action:'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные'}]);
// console.log(form);
//
// let option = new Tag('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
//     [{Title:'label', Action:'Указание метки пункта списка'}, {Title:'disabled', Action:'Заблокировать для доступа элемент списка'}]);
// console.log(option);
//
// let select = new Tag('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     [{Title:'accesskey',Action:'Позволяет перейти к списку с помощью некоторого сочетания клавиш'}, {Title:'form',
//     Action:'Связывает список с формой'}]);
// console.log(select);


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// let car = {
//     model: 'Passat CC',
//     producer: 'Volkswagen',
//     year: 2010,
//     maxSpeed: 280,
//     engineVolume: 2,
//     drive: function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} кілометрів на годину`);
//     },
//     info: function () {
//         console.log(`
//         Model - ${this.model};
//         Producer - ${this.producer};
//         Production year - ${this.year};
//         Max speed - ${this.maxSpeed} km/h;
//         Engine volume - ${this.engineVolume} litres`);
//     },
//     increaseMaxSpeed: function (newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(car.maxSpeed);
//     },
//     changeYear: function (newValue) {
//         this.year = newValue;
//         console.log(car.year);
//     },
//     addDriver: function (driver) {
//         this.driver = driver;
//         console.log(car.driver);
//     }
// }
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// car.addDriver({Name: 'Andrew', age: 25, car: false, experience: '2 months'});

