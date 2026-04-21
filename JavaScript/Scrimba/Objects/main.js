const books = {
    "b001": { title: "To Kill a Mockingbird", price: 18.99, isAvailable: true },
    "b002": { title: "1984", price: 15.99, isAvailable: false },
    "b003": { title: "The Great Gatsby", price: 12.49, isAvailable: true },
    "b004": { title: "Moby Dick", price: 22.50, isAvailable: false }
}

// how to access to any value in Object
// console.log(books.b002.price)
// console.log(books['b002']['price'])

// for (const itme in books) {
// console.log(itme)
// }


// console.log(Object.keys(books)) // Object keys
// console.log(Object.values(books)) // Object values
// console.log(Object.entries(books)) // Object keys and values


const bookKeys = Object.keys(books)
const bookValues = Object.values(books)
bookKeys.forEach(key => console.log(key))
bookKeys.forEach(key => console.log(books[key].title))
bookValues.forEach(val => console.log(val.title)) // نفس فوق


//Challenge:

const bookEntries = Object.entries(books)

// console.log(bookEntries)
// bookEntries.forEach(item => {
//     if(item[1].price > 16){
//         console.log(`ID: ${item[0]} Book: ${item[1].title} £${item[1].price}`)    
//     }
// })

const filteredArray = bookEntries.filter((obj) => obj[1].price > 16)
filteredArray.forEach(item => console.log(`ID: ${item[0]} Book: ${item[1].title} £${item[1].price}`))
// الحل نفس الي فوق
bookEntries.filter(([id, book]) => book.price > 16)
.forEach(([id, book]) => console.log(`ID: ${id} Book: ${book.title} £${book.price}`))

//** hasOwn or hasOwnProperty
//** the old way: newObj.hasOwnProperty(obj) , the new way: Object.hasOwn(oldOjb, newObj)
const user1 = {
    username: "rpchan",
    subscriptionLevel: "bronze",
}
  
const user2 = {
    username: "bcstevens",
    subscriptionLevel: "silver",
    accessPremiumFeature: true
}

// console.log(user2.hasOwnProperty('accessPremiumFeature')) //الطريقة القديمة
console.log(Object.hasOwn(user2, 'accessPremiumFeature'))

function canAccessPremiumFeature(userObj, prop) {
    // return Object.hasOwn(userObj, prop) && userObj.prop
    let objValues = Object.values(userObj)
    // return Object.hasOwn(userObj, prop) && objValues.includes(true)
    return Object.hasOwn(userObj, prop) && userObj[prop] // الحل

}


console.log(canAccessPremiumFeature(user1, 'accessPremiumFeature'))
console.log(canAccessPremiumFeature(user2, 'accessPremiumFeature')) 

// the problem with hasOwnProperty
const user3 = Object.create(null)
user3.username = 'Tom'
// console.log(user3.hasOwnProperty("username")) //Error
console.log(Object.hasOwn(user3, "username"))


//* Spread operator [...array] shallow copy
const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
const sweetMenu = ['Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']

const masterMenu = lunchMenu + dinnerMenu + sweetMenu
// console.log(masterMenu.split(','))

//the correct way
const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu];
eventMenu[8][0] = 'Tutti Frutti'; // في حال أضفت شي قائمة داخل قاممة يغيير القائمةالأصلية
console.log(eventMenu)
// same problem in Objects
const salad1 = {
    name: 'green',
    ingredients: ['lettuce', 'tomato'] 
}
const salad2 = {...salad1}
salad2.name = 'Greek'
salad2.ingredients[0] = 'Cucumber'
console.log(salad1)
console.log(salad2)


const averageSharePriceByMonthQ1 = [109.6, 103.3, 89.4]
const averageSharePriceByMonthQ2 = [109.3, 126.1, 103.3]
const averageSharePriceByMonthQ3 = [120.8, 102.3, 106.8]
const averageSharePriceByMonthQ4 = [110.9, 119.8, 113.7]

function findPriceExtremes(arr){

    const highest = Math.max(...arr)
    const lowest = Math.min(...arr)
    console.log(`The highest average share price was ${highest}`)
    console.log(`The lowest average share price was ${lowest}`)
}

//* assign Object Object.assign(obj) shallow copy
findPriceExtremes([...averageSharePriceByMonthQ1, ...averageSharePriceByMonthQ2, ...averageSharePriceByMonthQ3, ...averageSharePriceByMonthQ4])

const studentDetails = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    location: {country: 'sri lanka', city: 'colombo'},
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1',
    modulesCompleted: ['HTLM', 'CSS', 'JS']
    }  
    
const studentDetailsCopy = {}

//* the probelm with Object.assign
// Object.assign(studentDetailsCopy, studentDetails)
// studentDetailsCopy.location.city = 'Kotte'
// console.log(studentDetailsCopy)
// console.log(studentDetails)

const deepClonedStudentDetails = structuredClone(studentDetails)
deepClonedStudentDetails.modulesCompleted[0] = 'TS'
console.log(studentDetails)
console.log(deepClonedStudentDetails)


//* "this" key word
const gamer = {
    name: 'Dave',
    score: 0,
    incrementScore: function(){ // don't use arrow func, cuz "this" will return the "window" object
        // gamer.score++   
        this.score++   
    }
}

console.log(gamer)
gamer.incrementScore()
console.log(gamer)


//* bind() creates a new function that, when executed, calls the original function with a fixed this value and optional preset arguments, followed by any additional arguments passed later. */

const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        console.log(this)
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}

// product.getProductInfo()

const productDetails = product.getProductInfo.bind(product)

productDetails()