// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//

function Car (model, producer, year, maxSpeed, engineVolume ) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (drive) {
        console.log(`Ми їдемо зі швидкістю ${this.maxSpeed} км за годину`)
    };
    this.info = function () {
        console.log(`
        Model - ${this.model}; 
        producer - ${this.producer}; 
        production year - ${this.year}; 
        max speed - ${this.maxSpeed}; 
        engine volume - ${this.engineVolume}`)
    };
    this.newSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
        console.log(this.maxSpeed);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(this.year);
    };
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(this.driver);
    }
};

let volkswagen = new Car('Passat CC', 'Volkswagen', 2010, 280, 2);
volkswagen.drive();
volkswagen.info();
volkswagen.newSpeed(50);
volkswagen.changeYear(2015);
volkswagen.addDriver({Name: 'Volodya', Age: 28, car: true});
