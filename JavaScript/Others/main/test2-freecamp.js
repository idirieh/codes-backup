// const square = function(number) {
//     console.log(number * number)
//    }
//    square(2)

// for(let i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log('This number', i, 'is even')
//     }else{
//         console.log('This number', i, 'is odd')
//     }
// }

// let j = 1;
// while(j <= 10){
//     if(i % 2 == 0){

//     }
// }

// function stringContains(firstName, contains) {
//     return firstName.includes(contains)
// }

// console.log(stringContains('Ahmed', 'A'))

// let word = 'Ah'

// for(let i = 0; i < word.length; i++){
//     console.log(i)
// }


// throw new Error();
//   console.log("Hello");

// const letters = ['a', 'b', 'c', 'd']
// let myletter = 'd' 
// // console.log(letters.includes('f'))
// for (letter of letters){
//   if (myletter == letter){
//     console.log('Yes')
//   }else{
//     console.log('No')
//   }
// }

// letters.forEach(element => {
  
//   console.log(element + 1)
// });


// const mNumbers = [3, 7, 9]

// const sqaredNumbers = mNumbers.map((currentValue, index, array) => {
//     return currentValue ** 2
// })

// console.log(sqaredNumbers)

// function cumulative_addition(elements_array) {
//   // write your code here
  
//   let total = elements_array.reduce((preValue, CurrentValue) => {
//         return preValue + CurrentValue;
//   });
//   let myArray = [total, elements_array.length];
//   return myArray;
// }

// elements_array = [5,1,2,4,9,10,200]
// console.log(cumulative_addition(elements_array))




// from Freecodecamp
myArr = [1,2,3,4,5];
console.log('Before: ', myArr)

function addItemArray(arr, item) {
  arr.push(item);
  return arr
}

addItemArray(myArr, 6)
console.log('After: ', myArr)
console.log('After: ', JSON.stringify(myArr)) // will output string

function trueOrFalse(wasThatTrue) {
  if(wasThatTrue){
    return "Yes, it's True"
  }
  return "No, it's False"
}

console.log(trueOrFalse(false))


let caveMan = {
  "hair": "long",
  "skin": "brown",
  "age": 75
}

console.log(caveMan)

delete caveMan.skin

console.log(caveMan)

function phoneticLookUp(val){
  let result = ""

  let lookup = {
    "A": "Apple",
    "B": "Banana",
    "C": "Carrots",
  }

  return lookup[val]
}

console.log(phoneticLookUp("C"))

let listOfObjects = [
  {
    "firstName": "Mazen",
    "lastName": "Khaled",
    "course": "Math",
    "age": 25,
    "friends": [
      "Mosa",
      "Qassim",
      "Abulrahman"
    ]
  },
  {
    "firstName": "Nasser",
    "lastName": "Jamal",
    "course": "Sciences",
    "age": 23,
    "friends": [
      "Mohammed",
      "Waleed",
      "Yarob"
    ]
  }
]

console.log(listOfObjects[1].lastName)
console.log(listOfObjects[1].friends[2])

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

console.log(recordCollection[2468].artist)

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value === ""){
    delete records[id][prop]
  }else if(prop === "artist") {
    records[id][prop] = records[id][prop] || []
    records[id][prop].push(value)
  }else {
    records[id][prop] = value
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA')
console.log(recordCollection)

// while loop

let newArray = []

let num = 0;

while(num < 5) {
  newArray.push(num)
  num++
}

console.log(newArray)

// for loop

let product = [[1,2], [1,2,2], [6,4,5]]
function multiplyAll(arr){
  let oneArr = []
  let total = 0
  for(let i = 0; i < arr.length; i++){
    let nestedArr = arr[i]
    for(let j = 0; j < nestedArr.length; j++){
      total += nestedArr[j]      
      // console.log(mano[y])
    }
    oneArr.push(total)
    total = 0
  }
  console.log(oneArr)
}

multiplyAll(product)

// profile lookup challenge 
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for(let i=0; i < contacts.length; i++){
    if (contacts[i].firstName === name){
      return contacts[i][prop] || "NO such property"
    }    
  }
  return "No such contact"
}

console.log(lookUpProfile("man", "hello"))

// Ternary operator 


function checkEqual(a, b){
  // if( a === b ){
  //   true
  // }else {
  //   false
  // }

  return a === b ? true : false // same as the above
}

console.log(checkEqual(5, 7))

// nested ternary operator
function checkSign(num){
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
}

console.log(checkSign(18))

// Object freeze
function freezeObj () {
  "use strict";
  const MATH_COSTANT = {
    PI: 3.14
  }

  Object.freeze(MATH_COSTANT)

  try {
    MATH_COSTANT.PI = 99
  }catch( ex ){
    console.log(ex)
  }
  return MATH_COSTANT.PI;
};


console.log(freezeObj())


// Arrow function
let newFunc = () => console.log("Hi");

const myConcat = (arr1, arr2) => arr1.concat(arr2)

console.log(myConcat([1,2,3], [4,5,6]))


// another example for arrow function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Rest operator
let sum = (...args) => {
  return args.reduce((a, b) => a + b, 0)
}

console.log("The total is:", sum(1, 2, 3, 4))

// spread operator
const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;
arr4 = [...arr3]; // copy arr 3
arr3[0]= 'potato'
console.log(arr4)

// Destructuring assignment 
let voxel = {x: 3.6, y: 7.4, z: 6.54};

const {x : a, y : b, z : c} = voxel // a = 3.6, b= 7.4, c= 6.54
console.log(a,b,c)

console.log("<---------------->")

// Destructuring assignment on nested objects
const temperature = {
  today: {"min": 17, "max": 24},
  tomorrow: {"min": 15, "max": 22}
}

function getTemp(tempFunc){
  const {tomorrow : {max: tomorrowMax}} = tempFunc;
  return tomorrowMax
}

console.log(getTemp(temperature))

// Destructuring assignment on Array
const [x, y, , z] = [1, 2, 3, 4, 5, 6]
console.log(x, y, z)
console.log("<---------------->")
let i = 8, j = 6;
console.log(i, j)
let man = () => {
  [i, j] = [j, i];
} 
man();
console.log(i, j)
console.log("<---------------->")
function removeFirstTwo(list) {
  const [ , , ...shorterList] = list; // removing first two itmes from the list
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo)

console.log("<---------------->")

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0; // only passing what we need
console.log(half(stats))
console.log("<---------------->")

const createPerson = (name, age, gender) => ({name, age, gender});
console.log(createPerson("Mohammed", 25, "male"))

console.log("<---------------->")

// new way to set a function inside an object 
let myObj = {
  gear: 5,
  setGear(newGear){
    this.gear = newGear;
  }
}
console.log(myObj.gear)
myObj.setGear(8)
console.log(myObj.gear)

console.log("<---------------->")

// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();


console.log("<---------------->")

// Class getter and setter
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

console.log("<---------------->")
import strCap from "./test";
const cap = strCap("hello world")
console.log(cap)