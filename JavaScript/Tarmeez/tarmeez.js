// 5.1 soution
var number1 = 10
var number2 = 4

console.log(`First number is: ${number1}`)
console.log(`Second number is: ${number2}`)

var sum = number1 + number2
console.log(`Sum is: ${sum}`)

var sub = number1 - number2
console.log(`Sub is: ${sub}`)

var mult = number1 * number2
console.log(`Mult is: ${mult}`)

var div = number1 / number2
console.log(`Div is: ${div}`)

var mod = number1 % number2
console.log(`Mod is: ${mod}`)

console.log('*******The Solution*******')

var message = `First number is: ${number1}\nSecond number is: ${number2}\n===========\nSum is: ${sum}\nSub is: ${sub}\nMult is: ${mult}\nDiv is: ${div}\nMod is: ${mod}`
console.log(message)

// 8.1 solutoion

var greet = 'Hello World'
var upperGreet = greet.toUpperCase()
var replaceGreet = upperGreet.replace('O','Y')
var reverseGreet = replaceGreet.split("").reverse().join("");

console.log(greet)
console.log(upperGreet)
console.log(replaceGreet)
console.log(reverseGreet)

var age = 70
var health = 'strong'

// if (age >=40 && health == 'strong') {
//     console.log('Yes')
// }else {
//     console.log('No')
// }

// switch (health) {
//     case ('strong'):
//         console.log('You are in good health')
//         break
//     case ('weak'):
//         console.log('You need to work on your health')
//         break
//     default:
//         console.log('good')
// }

switch (true) {
    case (age >= 60):
        console.log('Old and the age is: ', age)
        break
    case (age >=40) && (health == 'strong'):
        console.log('Mid and the age is: ', age)
        break
    default:
        console.log('young')
}

let cname = 'Hanwha'
for (let i = 0; i < cname.length; i++) {
    console.log(cname[i])
}

console.log('*****')

// same as the above example
for (i in cname) {
    console.log(cname[i])
}

console.log('*****')

// will output letter
for (i of cname) {
    console.log(i)
}


// functions challenge
let myArray = [9, 1, 5, 7, 10, 'hello', true]

function listReverce(arr=[5, 7, 9]){
    let newArr = []
    for(let i = arr.length - 1; i >= 0; i--){
        newArr.push(arr[i])
    }
    console.log(newArr)
}

listReverce(myArray)

// the solution

function reverseArray(arr=[20, 10, 50, 60]){
    let outputArray = []
    for(item of arr){
        outputArray.unshift(item)
    }
    return outputArray
}

console.log(reverseArray())

// Anonymous functions

let y = function(){
    console.log('Hi from Y')
}

function callFuunctions(functionToCall){
    console.log('This is the first function')
    functionToCall()
}

callFuunctions(function(){
    console.log('Hi Good morning')
})

// timer in JS
setTimeout(() => {
    console.log('Hello world')
}, 3000);

setInterval(() => {
    console.log('Hi every 3sec')
}, 3000);

// callback function (foreach)

let arr = [1, 2, 3, 4]
arr.forEach(function(num){
    console.log(num * 10)
})

// Objects
let student1 = {
        name: 'Khaled',
        age: 15,
        year: 2000,

        fullName: function(){
            console.log(`my name is ${this.name} and I'm ${this.age} old`)
        }
    }

console.log(student1)

// list of objects inside object
let students = [
    {
        name: 'Khaled',
        age: 15,
        year: 2000,

        fullName: function(){
            console.log(`my name is ${this.name} and I'm ${this.age} old`)
        }
    },
    {
        name: 'Ahmed',
        age: 15,
        year: 2002,

        fullName: function(){
            console.log(`my name is ${this.name} and I'm ${this.age} old`)
        }
    },
    {
        name: 'Sami',
        age: 15,
        year: 2010,

        fullName: function(){
            console.log(`my name is ${this.name} and I'm ${this.age} old`)
        }
    },
    {
        name: 'Waleed',
        age: 15,
        year: 2017,

        fullName: function(){
            console.log(`my name is ${this.name} and I'm ${this.age} old`)
        }
    }
]  

console.log(students)

// nested objects
let students1 = [
    {
        fullName: {
            firstName: 'Khaled',
            lastName: 'Omar'
        },
        age: 15,
        year: 2000,
        course: [{name: 'math', credit: 4.1}, {}],
        talk: function(){
            console.log(`my name is ${this.name} and I'm ${this.age} old`)
        }
    },
    {
        fullName: {
            firstName: 'Ahmed',
            lastName: 'Omar'
        },
        age: 15,
        year: 2002,
        course: [{name: 'math', credit: 4.9}, {}],
        talk: function(){
            console.log(`my name is ${this.name} and I'm ${this.age} old`)
        }
    },
    {
        fullName: {
            firstName: 'Sami',
            lastName: 'Omar'
        },
        age: 15,
        year: 2010,
        course: [{name: 'math', credit: 4.5}, {}],
        talk: function(){
            console.log(`my name is ${this.name} and I'm ${this.age} old`)
        }
    }
]  

console.log(students1)

// Destructuring Assignment

let st = {
    lastName: 'Ahmed',
    age1: 25
}

let {lastName, age1} = st
console.log(lastName, age1)

let myArr = [10, 20, 30, 40]
let [one, two, three, four] = myArr
console.log(one, two)

function printFullName({firstName, lastName}){
    console.log(firstName, lastName)
}