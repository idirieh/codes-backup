console.log("Welcome to my first js command")

// var is old use for variables
// var name = "Mohammed"
// let is the new way for variables
let man = "Mohammed"
console.log(man)
let firstName = "Khaled", lastName = 'Mosa'
console.log(lastName)

console.log(`My name is ${man}`) // this is possible with backtick

let age = 26;
console.log(age);
age = 31;
console.log(age);

const yearOfBirth = 1987;
console.log(yearOfBirth)
// yearOfBirth = 1990 (this will result Typeerror becasue is not variable is constant)

// the differant between var and let is the scope (this from other course)
function checkScope(){
  "use strict";
  let i = "function scope";
  if(true){
    let i = "block scope";
    console.log(i)
  }
  console.log(i)
  return i
}

checkScope()


let result = 1 === 1.0 // checking the value and the type
console.log(result)

// postfix
let number1 = 2;
let result1 = number1++ + 4;
console.log(result1);
console.log(number1);
// prefix
let number2 = 2;
let result2 = ++number2 + 4;
console.log(result2);
console.log(number2);

// and
let notRaining = true;
let notFoggy = true;
let isSunny = notRaining && notFoggy;
console.log(isSunny);

// or
let notRaining1 = true;
let notFoggy1 = true;
let isSunny1 = notRaining1 && notFoggy1;
console.log(isSunny1);

// not
let isStudent = true;
console.log(!isStudent);

console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isStudent)


// Template Literals - comment in more than oneline
let message = `Welcome
to
JavaScript`;
console.log(message);

// we can use code inside backtick
let language = 'Python';
let msg = `Welcome to ${language}`;
console.log(msg)

// test
let firstNumber = 9
let secondNumber = 31
let resultOne = secondNumber - 1 * firstNumber
console.log(resultOne)

console.log(100 % 5)

// length
let course = "JavaScript"
console.log(course.length)
console.log(course[2])
