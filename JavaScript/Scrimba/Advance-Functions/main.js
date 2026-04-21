//* Closures
"use strict"

function outerFunction(param) {
    const outerVariable = 'I am from the outer function'
    
    function innerFunction() {
        console.log(param)
        console.log(outerVariable)
    }
    
    return innerFunction
}

const closure = outerFunction('I am an argument')

closure()
closure()

// another example for closure from JS Eloquent
function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
console.log(wrap1())
let wrap2 = wrapValue(2);
console.log(wrap2())
// another one from JS Eloquent
function multiplier(fector) {
    return number => number * fector;
}
let twice = multiplier(2);
console.log(twice(5))


// example

function scorePoint(playerName) {
    let score = 0
    return {
        displayScore: function () {
            console.log(`${playerName} has ${score} points`)
        },
        incrementScore() {
            score++
        },
        decrementScore: () => {
            score--
        }
/*
هذه ثلاث طرق لعمل دالة داخل اوبجيكت
*/
    }
}

const player1 = scorePoint('Vicky')
const player2 = scorePoint('Leo')

player1.displayScore()
player1.incrementScore()
player1.incrementScore()
player1.displayScore()
player1.decrementScore()
player1.displayScore()

/* 
Challenge: 
    1. Write a function that simulates a simple bank account. 
       The function should store the balance and enable users  
       to deposit money, withdraw money, and check the balance.

Requirements:

- The account balance should start at zero.

- The function should return an object containing 
  3 functions. One for depositing money, one for 
  withdrawing money, and a getBalance function which 
  logs the balance and the account holder's name.

- Deposits should add to the balance, and withdrawals should subtract 
  from it. 
*/

function createBankAccount(ownerName) {
    let balance = 0;
    return {
        deposit: function(amount) {
            balance += amount;
        },
        withdraw(amount) {
            balance -= amount;
        },
        getBalance() {
            console.log(`Hi ${ownerName}, you have ${balance}$ balance in your Account`)
        }
    }
   

}

const daveAccount = createBankAccount('Dave')
const wendyAccount = createBankAccount()

// Test your code by calling the functions.

daveAccount.getBalance()
daveAccount.deposit(100)
daveAccount.getBalance()
daveAccount.withdraw(50)
daveAccount.getBalance()


//* IIFEs

(function(num){
    let theme = num;
    if(theme == 0){
        console.log('Dark')
    }else {
        console.log('Light')
    }
})(0)

(async () => {
  // Your asynchronous code using await goes here
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
})();

(async (country) => {
    const weather = await fetch('/geo.json')
    const weatherObj = await weather.json()
    console.log(`The weather in the ${country} today is ${weatherObj[country]}`)  
})('UK');

//* Currying

function calculateVolume(length) {
    return function(width) {
        return function(height) {
            return length * width * height
        }
    }
}

// same as the above
const calculateVolume = (length) => (width) => (height) => length * width * height

// const withLength = calculateVolume(2)
// const withLengthAndWidth = withLength(3)
// const volume = withLengthAndWidth(4)

const volume = calculateVolume(2)(3)(4)

console.log(volume)

// Currying Partial application
const calculateVolume = length => width => height => length * width * height

const calculateBaseAreaVolume = calculateVolume(2)(3)

const totalVolume1 = calculateBaseAreaVolume(4)
const totalVolume2 = calculateBaseAreaVolume(6)
const totalVolume3 = calculateBaseAreaVolume(10)


console.log(totalVolume1)
console.log(totalVolume2)
console.log(totalVolume3)


/*
Challenge:
    1. Curry this function!
    Set up three partially applied functions called 'infoLogger', 
    'warnLogger', and 'errorLogger'. 
    The partially applied functions should have their level ('info', 
    'warn', 'error'). 
    You should be able to call these functions and pass in a message.
    E.g. console.log(warnLogger("Low disk space")) would log: "[WARN] Low disk space".
    🛟 hint.md for help.
*/
const logMessage = (level) => (message) =>`[${level.toUpperCase()}] ${message}`

const infoLogger = logMessage("info")
const warnLogger = logMessage("warn")
const errorLogger = logMessage("error")
// Log messages with "info" level
console.log(infoLogger("Application started")) // Output: "[INFO] Application started"
console.log(infoLogger("User logged in")) // Output: "[INFO] User logged in"

// Log messages with "warn" level
console.log(warnLogger("Low disk space")) // Output: "[WARN] Low disk space"
console.log(warnLogger("High memory usage")) // Output: "[WARN] High memory usage"

// Log messages with "error" level
console.log(errorLogger("Unhandled exception")) // Output: "[ERROR] Unhandled exception"
console.log(errorLogger("Failed to save file")) // Output: "[ERROR] Failed to save file"


//* Generators

const slidesArr = [
    "1. Intro Slide", 
    "2. The current situation", 
    "3. Setbacks", 
    "4. Plans", 
    "5. A Positive Future"
]

function* generator(arr) {
    for (const item of arr) {
        yield item
    }
}

const slideGenerator = generator(slidesArr)

document.getElementById('nextSlideBtn').addEventListener('click', () => {
    const result = slideGenerator.next()
    if (!result.done) {
        console.log(result.value)   
    } else {
        console.log('That is the end of the presentation!')
    }
}) 
