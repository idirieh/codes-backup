//* There are three ways to create Object
//* 1- Factory Function
// the pros: 1- the syntax is familiar 2- the syntax is easy to read
// the cons: 1- less performant 2- no Inheritance
function gamer(name, score){ 
    return {
        name, //obj prob value shorthand
        score,
        incrementScore(){
            this.score++   
        }
    }
}

const ahmed = gamer('Ahmed', 22)
console.log(ahmed)
ahmed.incrementScore()
console.log(ahmed)


//* 2- Construction Function

function Gamer(name, score){
    this.name = name
    this.score = score
    this.incrementScore = function() {
        this.score ++
    }
}

const mosa = new Gamer('Mosa', 125)
console.log(mosa)
mosa.incrementScore()
console.log(mosa)

// challenge
function Character(name){
    this.name = name
    this.collectedItemsArr = []
    this.addItem = function(item){
        this.collectedItemsArr.push(item)
        console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`)
    }
}

const marlin = new Character('Marlin')
marlin.addItem('wand')
marlin.addItem('map')

//* 3- Classes

// const islam = new Gamer('Islam', 5) //Error, because Classes are not hoisted
// console.log(islam)

class Gamer {
    constructor(name, score){
        this.name = name
        this.score = score
    }
    incrementScore(){
        this.score++
    }

}

const jamal = new Gamer('Jamal', 10)
console.log(jamal)
jamal.incrementScore()
console.log(jamal)


//* call() method when working with 'this' in a function, and apply() mehtod is good for list of args
function greet(role){
    console.log(this)
    console.log(`Hello ${this.name} and I'm ${this.age} years old, he is a ${role}`)
}

const salah = {
    name: 'Salah',
    age: 19
}
const hamad = {
    name: 'Hamad',
    age: 37
}
const oamr = {
    name: 'Omar',
    age: 23
}
greet(salah, 'Student')
greet.call(salah, 'Student')
greet.call(hamad, 'Teacher')
greet.apply(hamad, ['Teacher']) 

//* Inheritance with Construction Function
//* the old way ()
function Event(name, location, date) {
    this.name = name
    this.location = location
    this.date = date
    this.getDetails = function() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

function Concert(name, location, date, headliner) {
    Event.call(this, name, location, date)
    this.headliner = headliner
}

Concert.prototype = Object.create(Event.prototype)
Concert.prototype.constructor = Concert

const concert = new Concert("Summer Beats", "City Stadium", "2024-07-15", "The Electrons")
console.log(concert.getDetails())

// this is the best way to add any methods if you are inheriting the Object
Event.prototype.cancelEvent = function() {
    return 'Event Cancelled'
}
//* polymorphism: means that we take same method from parent object and change it to our own
Concert.prototype.getDetails = function() {
    const eventBasics = Event.prototype.getDetails.call(this)
    return `${eventBasics} Headliner: ${this.headliner}`
}
const concert2 = new Concert("Happy days", "Highlands Park", "2024-08-08", "Dave Notes")
const concert3 = new Concert("Lush Vibes", "Wembley", "2024-03-08", "Si Twig")

console.log(concert2.getDetails())
console.log(concert3.getDetails())

//* Inheritance with Classes
class Event {
    constructor(name, location, date){
        this.name = name
        this.location = location
        this.date = date
    }

    getDetails() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

class Concert4 extends Event{
    constructor(name, location, date, headliner){
        super(name, location, date)
        this.headliner = headliner
    }
    getDetails(){
        const eventBasics = super.getDetails()
        return `${eventBasics} Handliner: ${this.headliner}`
    }
}

const concert4 = new Concert4('Waleed', 'Riyadh', '2025-08-14', 'The Boss')
console.log(concert4.getDetails())
const concert5 = new Concert4("Summer Beats", "City Stadium", "2023-07-15", "The Electrons")
console.log(concert5.getDetails())

// challenge 
class Event {
    constructor(name, location, date) {
        this.name = name
        this.location = location
        this.date = date
    }

    getDetails() {
        return `Event: ${this.name}, Location: ${this.location}, Date: ${this.date}`
    }
}

class TennisMatch extends Event{
    constructor(name, location, date, player1, player2){
        super(name, location, date)
        this.player1 = player1
        this.player2 = player2
    }
    getDetails() {
        const eventBasics = super.getDetails()
        return `${eventBasics} Match: ${this.player1} vs ${this.player2}`
    }
}


const tennisMatch = new TennisMatch("Grand Slam Final", "Wimbledon", "2025-07-15", "J Bloggs", "B Doe")
console.log(tennisMatch.getDetails())


//* Static Methods and Properties
class Employee {
    static employeeCount = 0
    constructor(name) {
        this.name = name
        Employee.employeeCount++
    }
    static getEmployeeCount(){
        return Employee.employeeCount
    }
}

const employee1 = new Employee("Alice")
const employee2 = new Employee("Bob")
console.log(employee1)
console.log(employee2)
// console.log(Employee.employeeCount)
console.log(Employee.getEmployeeCount())

//* Privte Fileds with Getter and Setter

class Holiday {
    #destination
    constructor(destination, price){
        this.#destination = destination
        this.price = price
    }

    get destination() {
        return this.#destination
    }   

    set destination(newDestination) {
        if(typeof newDestination !== 'string' || newDestination <= 0){
            throw new Error('Destination not valid')
        }
        this.#destination = newDestination
    }
}

const safari = new Holiday('Kenya', 1000)
console.log(safari)
console.log(safari.destination)
safari.destination = 'Tanzania'
console.log(safari.destination)


