// الطريقة القديمة
// function User (id, userName, salary) {
//     this.i = id;
//     this.u = userName;
//     this.s = salary
// }

class User {
    constructor(id, userName, salary) {
        this.i = id;
        this.u = userName;
        this.s = salary
    }
}

let userOne = new User(100, 'Elzero', 5000)
console.log(userOne.i)
console.log(userOne.u)
console.log(userOne.s)

console.log(userOne instanceof User)
console.log(userOne.constructor === User)


/*
 * the static keyword defines properties and methods that belong to the class itself, 
 * rather than to any specific instance (object) of that class. 
 * This means you can access static members directly on the class constructor without needing to create an      object first.
 */

class User1 {
    // static property
    static count = 0;

    constructor(id, userName, salary) {
        this.id = id;
        this.userName = userName || "Unknown";
        this.salary = salary > 6000 ? salary + 500: salary
        this.msg = function() {
            console.log(`Hello ${this.userName}, Your Salary is ${this.salary}`);            
        }
        User1.count++;
    }


    // static Method
    static countMembers() {
        return `${this.count} Members created`
    }
}

let userTwo = new User1(101, 'Hassan', 7000)
let userThree = new User1(101, '', 4000)
console.log(userThree.msg())
console.log(userTwo.msg())
console.log(User1.countMembers())

/*
  Class
  - Inheritance
*/

// Base Class
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    return `${this.brand} ${this.model} engine started.`;
  }
}

// Derived Class
class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model);
    this.doors = doors;
  }
}

// Further Derived Class
class ElectricCar extends Car {
  constructor(brand, model, doors, batteryRange) {
    super(brand, model, doors);
    this.batteryRange = batteryRange;
  }
}

let vehicleOne = new Vehicle("Toyota", "Corolla");
let carOne = new Car("Honda", "Civic", 4);
let electricCarOne = new ElectricCar("Tesla", "Model 3", 4, "500km");

console.log(vehicleOne.startEngine());          // Toyota Corolla engine started.
console.log("####");
console.log(carOne.brand);                      // Honda
console.log(carOne.doors);                      // 4
console.log(carOne.startEngine());              // Honda Civic engine started.
console.log("####");
console.log(electricCarOne.model);              // Model 3
console.log(electricCarOne.batteryRange);       // 500km
console.log(electricCarOne.startEngine());      // Tesla Model 3 engine started.


/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class Product {
  // Private property
  #price;

  constructor(id, name, basePrice) {
    this.id = id;
    this.name = name;
    this.#price = basePrice;
  }

  // Method to get final price after tax
  getFinalPrice(taxRate) {
    return this.#price + (this.#price * taxRate);
  }
}

let productOne = new Product(200, "Laptop", 1000);

console.log(productOne.name);               // "Laptop"
console.log(productOne.getFinalPrice(0.2)); // 1200 (20% tax)

class Electronics extends Product {
    constructor(id, name, basePrice, voltage) {
        super(id, name, basePrice)
        this.voltage = voltage
    }
}

let productTwo = new Electronics(201, "HP Printer", 300, 220)
console.log(productTwo.name);               // "HP Printer"
console.log(productTwo.getFinalPrice(0.2)) // 360


/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User3 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let myUser = new User3(100, "Elzero");
console.log(myUser.u);
console.log(User3.prototype);
console.log(myUser);

User3.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Elzero";

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
    a: 1,
    b: 2,
}

Object.defineProperty(myObject, "c", {
    writable: false, // تغيير القيمة
    enumerable: true,  
    configurable: true, // امكانية التغيير
    value: 3
})

myObject.c = 100;

console.log(myObject);

console.log(delete myObject.c);

console.log(myObject);

//* defineProperties

Object.defineProperties(myObject, {
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
  f: {
    configurable: true,
    value: 6,
  },
});

console.log(myObject);

console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
console.log(Object.getOwnPropertyDescriptors(myObject));


