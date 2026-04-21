// Date 10/17/2020

const d = new Date(2020, 9, 17)
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getMonth())
console.log(d.getFullYear())


// Callback Function

function sum(firstNumber, secondNumber){
    return `[${firstNumber + secondNumber}]`
}

function sub(firstNumber, secondNumber){
    return `[${firstNumber - secondNumber}]`
}

function operation(firstNumber, secondNumber, opCallback){
    return `[${opCallback()}]`
}

