// For of iterable for Arrays(arrays is sort of object) and Strings
"use strict"
const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

for(let char in characters){
    for(let power of char.powers){
        console.log(power)
    }
}

// for in iterable for Objects(keys)

const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

for (let property in character1) {
    console.log(character1[property])
}


// for each same as for of but is better for iterating over arrays

const characters2 = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    { 
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },  
    { 
        title: 'Unicorn',
        emoji: '🦄',
        powers: [ 'flight', 'power', 'purity'],
    }
]

// characters2.forEach(function(character){
//     character.powers.forEach((power) => {
//         console.log(power)
//     })
// })
characters2.forEach(function(character, index){
    console.log(character, index)
})

//Convert these Miles to KM! 
const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148]

// const conversionFactorMilesToKm = 1.6

const conversionFactorMilesToKm = distanceWalkedMilesArr.map((e) => {
    return e * 1.6
})

console.log(conversionFactorMilesToKm)


// map() vs forEach()

const playlistArr = [
    {
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        albumArt: 'bohemian-rhapsody.png'
    },
    {
        title: 'As It Was',
        artist: 'Harry Styles',
        albumArt: 'as-it-was.png'
    },
    {
        title: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        albumArt: 'stairway-to-heaven.png'
    },
    {
        title: 'Therefore I Am',
        artist: 'Billie Eilish',
        albumArt: 'therefore-i-am.png'
    }
]


playlistArr.forEach(function(track){
    console.log(track)
})
playlistArr.map(function(track){
    console.log(track)
})


// Use .map() if you need to make a use of new array it return
// Use .forEeach() if don't need to create a new array


//* filter()

const ages = [8, 12, 34, 45]

const adults = ages.filter((age) => {
    return age >= 18
})

console.log(adults)


// Challenge

const series = [
    {
        name: 'The Wire',
        location: 'Baltimore',
        lengthInHours : 60,
        genres: ['action', 'thriller', 'detective', 'suspense']
    },
    {
        name: 'Game of Thromes',
        location: 'Westeros and Essos',
        lengthInHours : 70.25,
        genres: ['fantasy', 'action', 'tragedy']
    },
    {
        name: 'Friends',
        location: 'New York',
        lengthInHours : 85,
        genres: ['comedy', 'romance', 'drama']
    },
    {
        name: 'The Walking Dead',
        location: 'Atlanta',
        lengthInHours : 131,
        genres: ['zombie', 'apocalypse', 'thriller', 'suspense']
    },
    {
        name: 'The Big Bang Theory',
        location: 'Pasadena',
        lengthInHours : 139.66,
        genres: ['comedy', 'nerd', 'romance']
    },
]

// const newYorkSeries = series.filter(function(show){
//     return show.location === 'New York'
// })

// console.log(newYorkSeries)
const thrillerShows = series.filter(function(show) {
    return show.genres.includes('thriller')
})

// series.forEach((show) => {   
//     console.log(show.genres) 
//     thrillerShows.push(
//         show.genres.filter((genre) => {
//             return genre === "thrillers"
//         })
//     )
// })


console.log(thrillerShows)

/*
Challenge:
1. Use the .filter() method to create an array
   of all of the thrillers.
*/


// reduce()

const rainJanuaryByWeek = [ 10, 20, 0, 122 ]

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function(total, currentElement){
    console.log('total: ' + total, 'currentElement: ' + currentElement)
    return total + currentElement
})

console.log(totalRainfallJanuary)


/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/



const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

const gradesTotal = grades.reduce((accumulator, currentElement) => {
    return accumulator + currentElement
})

const gradesAvg = gradesTotal / grades.length

console.log(`The class average is ${gradesAvg}`)


const studentsArr = [
    {
        name: 'Mike',
        grade: 75
    },
    {
        name: 'Emma',
        grade: 83
    },
    {
        name: 'Seth',
        grade: 66
    }
]

// let stdGtotal = 0
// for(let std of studentsArr){
//     console.log(std.grade)
//     stdGtotal += std.grade
// }

// console.log(stdGtotal)

// for(let std in studentsArr){
//     console.log(studentsArr[std])
// }

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce(function(total, currentStudent){
        return total + currentStudent.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))


// challenge

/* 
    Below is an array of objects representing expenses and refunds. 
    Positive amounts are expenses, negative amounts are refunds. 
    
    We want to find out how much money was spent in 2023. 
*/

const expensesAndRefunds = [
    { description: 'Groceries', amount: 50, year: 2023 },
    { description: 'Electronics', amount: -30, year: 2023 },
    { description: 'Dinner', amount: 40, year: 2023 },
    { description: 'Clothing', amount: 60, year: 2023 },
    { description: 'Entertainment', amount: 25, year: 2023 },
    { description: 'Rent', amount: -500, year: 2024 },
    { description: 'Utilities', amount: 100, year: 2024 },
    { description: 'Books', amount: 20, year: 2024 },
    { description: 'Fitness', amount: 30, year: 2024 },
    { description: 'Gifts', amount: 15, year: 2024 },
]

let totalSpent = 0
const cutoffDate = 2024

for(let expenses of expensesAndRefunds){
    if(expenses.amount > 0 && expenses.year == 2023){
        totalSpent += expenses.amount
    }    
}
console.log(`Total amount spent on items in 2023: $${totalSpent}`)


// same as the above but this time we used continue and break
for (let i = 0; i < expensesAndRefunds.length; i++) {
    const currentExpenseOrRefund = expensesAndRefunds[i]
    
    if (currentExpenseOrRefund.year >= cutoffDate) {
        console.log(`Reached cutoff date, exiting loop`)
        break   
    }
    
    if (currentExpenseOrRefund.amount < 0) {
        console.log(`Skipping ${currentExpenseOrRefund.description} due to refund`)
        continue
    } 
    
    totalSpent += currentExpenseOrRefund.amount 
}


console.log(`Total amount spent on items in 2023: $${totalSpent}`)


//* every() and some()


const dailyStepsArr = [10000, 12000, 8000, 15000, 11000, 19000, 13000]

// .every() returns true if every item passes the test.
const areAllOver10k = dailyStepsArr.every(function(stepCount) {
    return stepCount >= 10000
})

console.log(areAllOver10k)

// .some() returns true if one or more items pass the test.
const areSomeOver10k = dailyStepsArr.some(function(stepCount) {
    return stepCount >= 10000
})

console.log(areSomeOver10k)


//* find() and findIndex()
const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function(invoice) {
    return invoice > 1000
})

// .findIndex() returns the index of the first item that passes the test.
const invoiceIndexOver1k = invoicesUSDArr.findIndex(function(invoice) {
    return invoice > 1000
})

console.log(invoiceIndexOver1k)

// .indexOf() gives us the index of a given item in the array.
console.log(invoicesUSDArr.indexOf(26))

// .at() takes a positive or negative integer and returns the item at that index.
// Negative integers count back from the end of the array. 
console.log(invoicesUSDArr.at(-2))



//* replace and replaceAll using Regex
const sentence = "I love you with all my heart!"

console.log(sentence.replaceAll(/\b(love|heart)\b/g, function(){
    return `💜`
}))

const paragraph = "javaScript is the backbone of the internet. it was created in 1995. before JS, websites were so boring";

const capitalizedParagraph = paragraph.replace(/(^|\.\s+)\w/g, (match) => match.toUpperCase());

console.log(capitalizedParagraph); 

//* Regex
const text = "Please switch off the WIFI before you leave."
const userInput = "wifi"

const regex = new RegExp(userInput, 'gi')

const doesMatch = regex.test(text) //boolean

console.log(doesMatch)  


