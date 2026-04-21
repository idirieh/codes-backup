// Object Oriented Programming


console.log('**********The Object**********')

const car = {
    name: 'camry',
    color: 'white',
    currentSpeed: 0,
    move: function(speed){
        this.currentSpeed = speed
        return `This car name is ${this.name} it's moving by ${this.currentSpeed} km per hour`
    },
    stop: function(){
        this.currentSpeed = 0
        return `The ${this.name} has stopped`
    }
}

console.log(car)
console.log(car.move(100))
console.log(car.stop())

console.log()
console.log('**********The Class**********')

class Car {
    static numberOfCars = 0 // static member
    #currentSpeed // private member
    constructor(name, color = 'Black', currentSpeed){
        this.name = name
        this.color = color
        this.#currentSpeed = currentSpeed
        Car.incrementOfCars()
    }
    move(speed) {
        this.#currentSpeed = speed
        return `This car name is ${this.name} it's moving by ${this.#currentSpeed} km per hour`
    }
    stop() {
        this.#currentSpeed = 0
        return `The ${this.name} has stopped`
    }
    static incrementOfCars() {
        Car.numberOfCars++
    }
}

const car1 = new Car('camry', 'white', 180)
const car2 = new Car('corella')

car1.currentSpeed = 100

console.log(car1)
console.log(car2)

console.log(car1.move(70))
console.log(car2.move(120))
console.log(car1.stop())

console.log(Car.numberOfCars)


console.log()
console.log('**********inheritance**********')

class Animal {
    constructor(name, color){
        this.name = name
        this.color = color
        this.speed = 0
    }
    run(speed) {
        this.speed = speed
        return `${this.name} runs with speed ${this.speed}`
    }
    makeSound() {
        return 'sound...'
    }
}

class Cat extends Animal {
    makeSound() {
        return 'mew...' //overriding because same method in the super class
    }
}

class tiger extends Animal {
    makeSound() {
        return 'roar...'
    }
}

const cat = new Cat('Lucy', 'brown')
console.log(cat)
console.log(cat.makeSound())


console.log()
console.log('**********Call Method and Apply Method**********')


let user1 = {
    firstName: 'Khaled',
    lastName: 'Juma'
}

let user2 = {
    firstName: 'Mustafa',
    lastName: 'Osman'
}

let fullName = function(age) {
    console.log('Hello', this.firstName, this.lastName, 'Your age is', age)
}

fullName.call(user1, 32)
fullName.call(user2, 35)

fullName.apply(user1, [22])
fullName.apply(user2, [29])

let newFunction = fullName.bind(user1, '19')
// newFunction('19')
newFunction()

console.log()
console.log('**********Arrow Function**********')

// (parameter1, parameter2) => {return expression}

// (parameter1, parameter2) => expression

// (parameter1, parameter2) => {Statement}


let add1 = (num1, num2) => {
    return num1 + num2
}
console.log(add1(5, 2))

let add2 = (num1, num2) => {return num1 + num2} // same function as above
console.log(add2(5, 2))

let add3 = (num1, num2) => num1 + num2 // same function as above
console.log(add3(5, 2))

let result = (num1, num2) => {let result = num1 + num2}

let result1 = num1 => {let result1 = num1} // one parameter no need for brackets

let print = () => console.log('This arrow function has no parameters')
print()

console.log()
console.log('**********IIFE**********')
// IIFE or Immediately invoked function expression

// (function myfun(name){
//     return console.log(name)
// })('Ahmed')

// (function(n){
//     return console.log(n)
// })('Ahmed')

// (() => {
//     return console.log(n)
// })()

console.log()
console.log('**********Object Method**********')

let obj = {
    titel: "This is an Object to test",

    function1: function(){
        return console.log('Fist function')
    }, 

    function2: () => {
        return console.log('Second function')
    },

    function3() {
        return console.log('Third function')
    }
}

obj.function1()
obj.function2()
obj.function3()