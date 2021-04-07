//
// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===

class Comp {
    constructor(RAM, CPU = 1000, name) {
        this.RAM = RAM;
        this.CPU = CPU;
        this.name = name;
    }

    turningOn() {
        console.log('Hey man');
    }
}

let pc = new Comp('16', '500', 'HP');
pc.turningOn();


// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Laptop extends Comp {
    constructor(RAM, CPU, name, displaySize) {
        super(RAM, CPU, name);
        this.displaySize = displaySize;
        this.battery = Math.round(CPU / (displaySize * RAM));
    }
}

let laptop1 = new Laptop('16', 800, 'Dell', 15.6);
console.log(laptop1);

// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.


class UltraBook extends Laptop {
    constructor(RAM, CPU, name, displaySize, weight) {
        super(RAM, CPU, name, displaySize);
        this.weight = weight;
    }

    turningOn() {
        if (this.weight > 2 && this.battery < 4) {
            console.error(`404 Man, weight of your laptop should be less than 2kg, weight of yours is ${this.weight} kg. Also your battery life sucks`);
        } else {
            console.log('Hey man');
        }
    }
}

let laptop2 = new UltraBook(32, 900, 'Asus', 17.1, 2.5);

laptop2.turningOn();

// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

class BasicPC extends Comp {
    constructor(RAM, CPU = 1000, name) {
        super(RAM, CPU, name);
        this.FPS = Math.round(this.CPU / this.RAM);
    }

    gameStart(gameName) {
        console.log(`You're playing ${gameName} with ${this.FPS} FPS`);
    }

    setNewCPU(newCPU, newRAM) {
        this.newCPU = newCPU;
        this.newRAM = newRAM;

        if (newCPU > (this.CPU * 1.1) || newCPU < this.CPU) {
            console.log('Not possible to increase CPU power');
        } else {
            console.log(`Your CPU power has been increased by ${Math.round(((newCPU / this.CPU) - 1) * 100)} %`);
        }
        if (newRAM === this.RAM * 2) {
            console.log(`RAM has been increased in 2 times`);
        } else {
            console.log('Not possible to increase RAM');
        }
    }

}

let laptop3 = new BasicPC(8, 600, 'Acer');
console.log(laptop3);
laptop3.gameStart('Call of Duty');
laptop3.setNewCPU(640, 15);


// ===
// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.

class GamePC extends BasicPC {
    constructor(RAM, CPU = 1000, name) {
        super(RAM, CPU, name);
        this.FPS *= 2;
    }

    gameStart(gameName) {
        this.CPU *= 0.99;
        if ((this.CPU) < 500 && this.RAM < 8) {
            console.log(`На цьому відрі - ${this.name}, ігри не запускаються`);
        } else {
            console.log(`Бався`);
        }
    }
}

let laptop4 = new GamePC(4, 505, 'Apple');
console.log(laptop4);
laptop4.gameStart('Call of Duty');

