// this file is with js102 

function sum(firstNumber, secondNumber){
    return firstNumber + secondNumber
};
function sub(firstNumber, secondNumber){
    return firstNumber - secondNumber
};
function mul(firstNumber, secondNumber){
    return firstNumber * secondNumber
};


console.log(sum(5, 2));
console.log(sub(5, 2));
console.log(mul(5, 2));

function operation(firstNumber, secondNumber, opCallback){
    return `(${opCallback(firstNumber, secondNumber)})`
}

console.log(operation(5, 2, sum))
console.log(operation(5, 2, sub))
console.log(operation(5, 2, mul))


// Arrow function
console.log(operation(5, 6, (firstNumber, secondNumber) => firstNumber + secondNumber));

const div = (firstNumber, secondNumber) => firstNumber / secondNumber;
console.log(operation(8, 2, div))



/* ------------- */

function format(message, formatCallback){
    return formatCallback(message)
}

function htmlFormat(message){
    return `<div>${message}</div>`
}

function jsonFormat(message){
    return `{"message": ${message}}`
}

console.log(format("Welcome to JavaScript", htmlFormat))
console.log(format("Welcome to JavaScript", jsonFormat))


/* ------------- */


const colors = ['red', 'green', 'blue']

colors.forEach(function(currentValue, index, array){
    console.log(index, currentValue)
})

// same results 
// for(let x = 0; x < colors.length; x++){
//     console.log(colors[x])
// }

const isContainRed = colors.includes('red')
console.log(isContainRed)

// check if some
const ages = [11, 17, 22, 9]

const hasAdult = ages.some(function(element, index, array){
    return element >= 18
})

console.log(hasAdult) // true

// checks if all
const areAdults = ages.every(function(element, index, array){
    return element >= 18
})

console.log(areAdults) // false
