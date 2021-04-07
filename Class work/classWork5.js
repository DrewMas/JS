// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//

// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (drive) {
//         console.log(`Ми їдемо зі швидкістю ${this.maxSpeed} км за годину`)
//     };
//     this.info = function () {
//         console.log(`
//         Model - ${this.model};
//         producer - ${this.producer};
//         production year - ${this.year};
//         max speed - ${this.maxSpeed};
//         engine volume - ${this.engineVolume}`)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(this.year);
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
// };
//
// let volkswagen = new Car('Passat CC', 'Volkswagen', 2010, 280, 2);
// volkswagen.drive();
// volkswagen.info();
// volkswagen.increaseMaxSpeed(50);
// volkswagen.changeYear(2015);
// volkswagen.addDriver({Name: 'Volodya', Age: 28, car: true});


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     }
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км за год`)
//     }
//
//     info () {
//         console.log(`Model - ${this.model},
//         producer - ${this.producer},
//         production year - ${this.year},
//         max speed - ${this.maxSpeed},
//         engine value - ${this.engineVolume}`);
//     }
//
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//
//     changeYear (newValue){
//         this.year = newValue;
//         console.log(this.year);
//     }
//     driver (driver) {
//         this.driver = driver;
//         console.log(this.driver);
//     }
// }
//
// let newVolkswagen = new Car ('Passat CC', 'Volkswagen', 2010, 280, 2);
//
// newVolkswagen.drive();
// newVolkswagen.info();
// newVolkswagen.increaseMaxSpeed(30);
// newVolkswagen.changeYear(2015);
// newVolkswagen.driver({Name: 'Misha', age: 24, car: false});

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human {
//     constructor(name, age, footSize ) {
//         super(name, age);
//         this.footSize = footSize;
//     }
// }
//
// class Prince extends Human {
//     constructor(name, age, shoeSize) {
//         super(name, age,);
//         this.shoeSize = shoeSize;
//     }
// }
//
// const cinderellas =  [
//     new Cinderella('Anna', 20, 36),
//     new Cinderella('Vika', 21, 37),
//     new Cinderella('Dasha', 22, 38),
//     new Cinderella('Ira', 23, 39),
//     new Cinderella('Olya', 24, 38),
//     new Cinderella('Yulia', 23, 35),
//     new Cinderella('Nataliya', 22, 36),
//     new Cinderella('Tanya', 21, 39),
//     new Cinderella('Katya', 20, 38),
//     new Cinderella('Vasylyna', 21, 40),
//     ];
//
// const prince1 = new Prince('Petro', 25, 37);
//
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince1.shoeSize) {
//         console.log(cinderella);
//     }
// }



// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas =  [
    new Cinderella('Anna', 20, 36),
    new Cinderella('Vika', 21, 37),
    new Cinderella('Dasha', 22, 38),
    new Cinderella('Ira', 23, 39),
    new Cinderella('Olya', 24, 38),
    new Cinderella('Yulia', 23, 35),
    new Cinderella('Nataliya', 22, 36),
    new Cinderella('Tanya', 21, 39),
    new Cinderella('Katya', 20, 38),
    new Cinderella('Vasylyna', 21, 40),
    ];

function Prince(name, age, shoeSize) {
    this.name = name;
    this.age = age;
    this.shoeSize = shoeSize;
}
let prince1 = new Prince('Petro', 25, 37);

function findCinderella() {
    for (let i = 0; i < cinderellas.length; i++) {
        if (cinderellas[i].footSize === prince1.shoeSize) {
            console.log(cinderellas[i].name);
        }

    }
}

findCinderella(cinderellas);
