// Date 10/17/2020

const d = new Date(2020, 9, 17)
console.log(d.getDate())
console.log(d.getDay())
console.log(d.getMonth())
console.log(d.getFullYear())


// Callback Function

// function sum(firstNumber, secondNumber){
//     return `[${firstNumber + secondNumber}]`
// }

// function sub(firstNumber, secondNumber){
//     return `[${firstNumber - secondNumber}]`
// }

// function operation(firstNumber, secondNumber, opCallback){
//     return `[${opCallback()}]`
// }

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



console.log('*******')

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


console.log('*******')


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


console.log('*******')

// index of 
const letters = ['A', 'B', 'C', 'D', 'A', 'D']

console.log('indexOf: ',letters.indexOf('A', 1))
console.log('lastIndexOf: ', letters.lastIndexOf('A', -1))


// findIndex will give you the first element that matches the condition
const index = ages.findIndex(function(element){
    return element >= 18
})
console.log(index)

console.log('*******')

// find 
const elmt = ages.find(function(element){
    return element % 3 === 0
})

console.log(elmt)

console.log('*******')

// filter
const numbers = [2, 3, 7, 4, 9]

const evenNumber = numbers.filter(function(currentValue, index, array){
    return currentValue % 2 === 0
})

console.log(evenNumber)

console.log('*******')

// concat 
const pColors = ['red', 'green', 'blue']
const sColors = ['yellow', 'pink', 'orange']

const aColors = pColors.concat(sColors, 'black')
console.log(aColors)

console.log('*******')

// slice
const mColors = ['black', 'red', 'green', 'blue', 'white']

const rgbColors = mColors.slice(1, 4) // [ 'red', 'green', 'blue' ]
// const rgbColors = mColors.slice(1) // [ 'red', 'green', 'blue', 'white' ]
console.log(rgbColors)

console.log('*******')

// splice method remove some items from array or replace with new items even add new items
const spliceColors = ['black', 'red', 'green', 'blue', 'white']
spliceColors.splice(3) // [ 'black', 'red', 'green' ]
// spliceColors.splice(2, 2) // [ 'black', 'red', 'white' ]
// spliceColors.splice(2, 2, 'gray', 'yellow') // [ 'black', 'red', 'gray', 'yellow', 'white' ]
// spliceColors.splice(2, 0, 'gray', 'yellow') // [ 'black', 'red', 'gray', 'green', 'blue', 'yellow', 'white' ]
console.log(spliceColors)

console.log('*******')

// join method convert array to string
const arrColors = ['red', 'green', 'blue']

const strColors = arrColors.join('&')
console.log(strColors)


console.log('*******')

// sort method and reverse
const sortLetters = ['D', 'B', 'C', 'D', 'A', 'A']
sortLetters.sort()
console.log(sortLetters)
console.log('*******')
sortLetters.reverse()
console.log(sortLetters)

// split method

const strColors1 = 'red green blue black'
const arrColors1 = strColors.split(' ')
console.log('split method: ', arrColors1)


// map method

const mNumbers = [3, 7, 9]

const sqaredNumbers = mNumbers.map(function(currentValue, index, array){
    return currentValue ** 2
})

console.log(sqaredNumbers)


// reduce

const aNumbers = [2, 3, 1, 5]

const total = aNumbers.reduce(function(accumulator, currentValue, index, array){
    // console.log(`index: ${index}`)
    // console.log(`currentValue: ${currentValue}`)   
    // console.log(`accumulator: ${accumulator}`) 
    // return accumulator + 1  
    return accumulator + currentValue
}) // اختياري تحط القيمة الأولية لحاصل الجمع
// it's Optional degrade the initial value to the accumulator
console.log(`total ${total}`)