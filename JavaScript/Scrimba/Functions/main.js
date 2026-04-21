//* Functions Expression (is not hoisted)

const getTheftAlert = function(numberOfTransactionsHour){
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
        in the past hour. We think your card might have been 
        compromised`
    }
}

console.log(getTheftAlert(6))

// Arrow functions

const speedWarning = speed => `You are going at ${speed} mph!`

console.log(speedWarning(40))

const distanceTraveledMiles = [267, 345, 234, 190, 299]

// const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
//     return Math.round(distance * 1.6)
// })

const distanceTraveledKm = distanceTraveledMiles.map(distance =>  Math.round(distance * 1.6))

console.log(distanceTraveledKm)

//********* */

const itemsBoughtArr = [
    {
        name: 'Electric Toothbrush Holder',
        priceUSD: 40,
        desc: 'A robotic arm that holds and moves your electric toothbrush for you, ensuring optimal brushing technique.'
    },

{
        name: 'Invisible Milk',
        priceUSD: 10,
        desc: 'A carton of milk that turns completely transparent when poured into a glass, providing a magical and mysterious drinking experience.'
    },
{
        name: 'Self-Chilling Soup Can',
        priceUSD: 15,
        desc: 'A can of soup that instantly chills itself when opened, so you can enjoy a refreshing cold soup on a hot summer day.'
    },
{
        name: 'Glow-in-the-Dark Eggs',
        priceUSD: 8,
        desc: 'A carton of eggs that glow in the dark, making breakfast preparation an exciting and illuminating experience.'
    }
]

function calculateTotalCost(itemsBoughtArr){
/*
Challenge:
1. Use the reduce method to calculate the total 
   cost of items which have been bought.
*/

    const total = itemsBoughtArr.reduce((total, item) => {
        return total + item.priceUSD
    },0)
    return total
}

console.log(calculateTotalCost(itemsBoughtArr))

// * Rest parameter 

function setPermissionLevel(permissionLevel, ...names) {
    names.forEach((name) => console.log(`${name} now has ${permissionLevel} level access.`))

}

setPermissionLevel('admin', 'Dave', 'Sally', 'Mike', 'nomo')

// challenge

function getLabelsHtml(text, sender, ...names) {

    names.forEach((name) => {
    console.log(`<div class="label-card">
        <p>Dear ${name} </p>
        <p>${text}</p>
        <p>Best wishes,</p>
        <p>${sender}</p>
        </div>`)   
    })
    
    }
    
    
const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'
const emplyess = ['Sally', 'Mike', 'Rob', 'Harriet']
getLabelsHtml(text, sender, ...emplyess)

// document.getElementById('labels-container').innerHTML = getLabelsHtml(
//     text, 
//     sender, 
//     {name: 'Sally'}, 
//     {name: 'Mike'}, 
//     {name: 'Rob'}, 
//     {name: 'Harriet'}
// ) 




