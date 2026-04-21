
// **Symbols**  
// - A primitive data type  
// - An immutable identifier used as a property key in objects  
// - Each symbol is unique  
// - (A bit like UUIDs/GUIDs)

const userName = Symbol('user name')

const user = {
    name: 'Benny',
}

user[userName] = 'Benny67' // is hidden property, but is not fully private

console.log(user[userName])

//challege
const book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
}

const librarianNote = Symbol() //the dec is optional
book[librarianNote] = 'This title has gone missing'

console.log(book[librarianNote])

//* Map object and this Map is not the same map the array mentod
// const athlete1 = { name: "Alice", age: "50" }
// const athlete2 = { name: "Dave", age: "51" }
// const athlete3 = { name: "Nicky", age: "49" }

const finishers = new Map()
// this Map Object will take a another Object as key 
finishers.set(athlete1, 10000)
finishers.set(athlete2, 10200)
finishers.set(athlete3, 9800)
// console.log(finishers)
// finishers.forEach((value, key)=> console.log(key.name, value)) //this is possible because is a Map Object not a normal one
// console.log(finishers.size) // to see the total items in the Map Object just like (.length)
// console.log(finishers.get(athlete3))
// finishers.delete(athlete3)
// console.log(finishers.has(athlete3))
// console.log(finishers)


const athlete1 = { name: 'Alice', averageTime10KmMins: 58.3 }
const athlete2 = { name: 'Dave', averageTime10KmMins: 53.2 }
const athlete3 = { name: 'Micky', averageTime10KmMins: 64.5 }
const athlete4 = { name: 'Judy', averageTime10KmMins: 66.0 }

const athletes = new Map()
function addAthlete(athlete, time) {
/* 2. This function should add athletes to the "athletes" map. */
    athletes.set(athlete, time)
    return athletes
}

function getSummary(){
/* This function should make the following appear in the console */
    athletes.forEach((val, key) => {
        console.log(`${key.name} average time is ${key.averageTime10KmMins} but today Alice achieved ${val}`)
    })
//Alice's average time is 58.3 but today Alice achieved 57.3
//Dave's average time is 53.2 but today Dave achieved 61.1
//Micky's average time is 64.5 but today Micky achieved 59.9
//Judy's average time is 66 but today Judy achieved 61.6
}

addAthlete(athlete1, 57.3)
addAthlete(athlete2, 61.1)
addAthlete(athlete3, 59.9)
addAthlete(athlete4, 61.6)



getSummary()

//** Sets a uniq set of items

const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes']

const newSet = new Set(wishListArr)
console.log(newSet)
newSet.add('diary');
console.log(newSet)
newSet.delete('diary')
console.log(newSet)
console.log(newSet.has('diary'))
newSet.clear()
console.log(newSet)

newSet.forEach((listItem) => console.log(listItem)) //some of arrays methods work with sets

// but we can do the following to solve this problem
const wishListSet = Array.from(new Set(wishListArr))
wishListSet.map((listItem) => console.log('map',listItem))


/* Challenge:
    1. Refactor this code to use a Set instead  
       of an array so no tags can be duplicated!
*/

const postTags = new Set()

function addTag(newTag) {
    postTags.add(newTag)
}

addTag('history')
addTag('romans')
addTag('sociology')
addTag('history')
addTag('history')

postTags.forEach((tag) => console.log(tag))