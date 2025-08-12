// let grade = 75;

// if(grade > 75){
//     console.log('A')
// }else if(grade >= 75 || grade > 50){
//     console.log('B')
// }else if(grade >= 50 || grade > 25){
//     console.log('C')
// }else if(grade <= 25){
//     console.log('F')
// }else{
//     console.log('"The value of the age variable is not numerical"')
// }

// switch (grade){
//     case (grade == 75):
//         console.log('A');
//         break;
// }

// for(let i = 1; i <= 3; i++){
//     console.log(i)
// }
// console.log('Go')


// let x = 10
// while(x > 0){
//     console.log(x);
//     x--;
// }

// let i = 1;

// while(i < 5){
//     console.log(i);
// }
// console.log('Counting completed!');

// for(let i = 1; i <= 2; i++){
//     for(let j = 1; j <= 5; j++){
//         console.log('Week', i, 'day', j)
//     }
//     console.log('---')
// }


// let age = 17;

// if(age < 18){
//     console.log('Kid')
// }

// console.log(!false)


// const fruits1 = ['apples', 'pears']
// const fruits2 = [...fruits1]
// fruits1.pop()
// console.log(fruits1, "not", fruits2)

// const meal = ["soup", "steak", "ice cream"]
// let [starter] = meal;
// console.log(starter);
// let obj = {
//     key: 1,
//     value: 4
// };

// let output = { ...obj };
// output.value -= obj.key;

// console.log(output.value);


// const numbers = [9, 3, 12, 44, 1, 99, 7];
// const minNumer = Math.min(...numbers);
// console.log(minNumer);
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

console.log('round: ', Math.round(3.75))
console.log('floor: ', Math.floor(3.75))
console.log('abs: ', Math.abs(3.75))
console.log('ceil: ', Math.ceil(3.75))

function sumArray(...num) {
    return num 
}

console.log(sumArray(2, 3))


// const athlete1 = { name: "Alice", age: "50" }
// const athlete2 = { name: "Dave", age: "51" }
// const athlete3 = { name: "Nicky", age: "49" }

const finishers = new Map()

finishers.set(athlete1, 10000)
finishers.set(athlete2, 10200)
finishers.set(athlete3, 9800)
// console.log(finishers)
finishers.forEach((value, key)=> console.log(key, value))



const athlete1 = { name: 'Alice', averageTime10KmMins: 58.3 }
const athlete2 = { name: 'Dave', averageTime10KmMins: 53.2 }
const athlete3 = { name: 'Micky', averageTime10KmMins: 64.5 }
const athlete4 = { name: 'Judy', averageTime10KmMins: 66.0 }

/* Challenge */

/* 1. Create a map object "athletes" to store the athletes. */
const athletes = new Map()

function addAthlete(athlete, time) {
/* 2. This function should add athletes to the "athletes" map. */
    athletes.set(athlete, time)
}

function getSummary(){
/* This function should make the following appear in the console */

    athletes.forEach((value, key) => console.log(`${key.name} average time is ${key.averageTime10KmMins} but today Alice achieved ${value}`))
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


fetch("https://apis.scrimba.com/dog.ceo/api/breeds/list/all")
.then((response) => response.json())
.then((data) => console.log(data))


/*
Challenge:
1. Get the promise working so it returns “Operation successful!” 
   if it resolves and "Operation failed." if it rejects. 
*/

const promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5
    if (success) { 
      resolve('Operation successful!')
    } else {
        reject('Operation failed.')
    }
})

// promise.then(response => console.log(response))

try {
    const response = await promise
    console.log(response)
} catch(err) {
    console.log(err)
}



// coderhub

function allSameCase(word) {
    // write your code here
    if(/[A-Z]/.test(word)){
        console.log('All Caps')
    }else if (/[a-z]/.test(word)){
        console.log('All small')
    }else {
        console.log('Very Bad')
    }
}

word = 'Hello';

allSameCase(word)

function allSameCase(word) {
    // write your code here
    const letters = word.split('');
    const allUpperCase =  letters.every(e => e == e.toUpperCase());
    const allLowerCase =  letters.every(e => e == e.toLowerCase());

    return allUpperCase || allLowerCase
}

word = 'HeLLO';

console.log(allSameCase(word))


function countdown(num) {
    // write your code here
    let evenNumbers = []
    for(let i = num; i > 0; i-=3){
        // console.log(i);
        if(i % 2 == 0){
            evenNumbers.unshift(i)
        }
    }
    return evenNumbers
}

console.log(countdown(23))


for(let i = 10; i > 0; i-=3){
    console.log(i)
}



let myArr = [7, 2, 20, 9, 1, 3];
function sortArray(arr){
    let smallest = null;
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(smallest == null || arr[i] < smallest){
            smallest = arr[i]
        }
    }
    newArr.push(smallest);
    console.log(newArr)
}

sortArray(myArr)

// function minmax(arr){
//     let largest = 0;
//     let smallest = null;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//         if(smallest == null || arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }

//     console.log(largest)
//     console.log(smallest)
// }

// minmax(myArr)


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
fruits.splice(index, 1)
console.log(fruits)
const citrus = fruits.slice(1, 3);
console.log(citrus)


function input_type(value) {
    // write your code here

}

let n= '21.21'

if(Number.parseInt(n) &&  n.includes('.')){
    console.log('Double')
}else if(Number.parseInt(n)){
    console.log('intger')
}else if(/[a-zA-Z]/.test(n)){
    console.log('string')
}

console.log(n.includes('n'))

// نفس الكلة وعكسها
// function isPalindrome(s) {
//     // write your code here
//     const currentWord = s.toLowerCase().replace(/[^a-zA-Z]/g, '')
//     const reverseWord = currentWord.split('').reverse().join('')
//     return currentWord == reverseWord
// }

// s = 'Madam'
// console.log(isPalindrome(s))

function isPalindrome(s) {
    // write your code here
    const toArray = s.toLowerCase().split('');
    toArray.forEach( char => {
        console.log(char)
    })

    // const reverseWord = currentWord.split('').reverse().join('')
}

s = 'Madam'
console.log(isPalindrome(s))

function digitize(n) {
  return n.toString().split('').map(Number).reverse()
}

console.log(digitize('35231')) // [1,3,2,5,3]
console.log(digitize('0'))     // [0]
console.log(digitize('293655'))


function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}

console.log(makeUpperCase("hello"))
console.log(makeUpperCase("Hello"))
console.log(makeUpperCase("HELLO"))


function boolToWord( bool ){

  
}




/*

| Player 1 | Player 2 | Result        |
| -------- | -------- | ------------- |
| rock     | rock     | Draw!         |1 
| rock     | paper    | Player 2 won! |2
| rock     | scissors | Player 1 won! |3
| paper    | rock     | Player 1 won! |4
| paper    | paper    | Draw!         |5
| paper    | scissors | Player 2 won! |6
| scissors | rock     | Player 2 won! |7
| scissors | paper    | Player 1 won! |8
| scissors | scissors | Draw!         |9


*/

// const rps = (p1, p2) => {
//     if(p1 == "rock" && p2 == "rock"){
//         return "Draw!";
//     }else if(p1 == "rock" && p2 == "paper"){
//         return "Player 2 won!";
//     }else if(p1 == "rock" && p2 == "scissors"){
//         return "Player 1 won!";
//     }else if(p1 == "paper" && p2 == "rock"){
//         return "Player 1 won!";
//     }else if(p1 == "paper" && p2 == "paper"){
//         return "Draw!";
//     }else if(p1 == "paper" && p2 == "scissors"){
//         return "Player 2 won!";
//     }else if(p1 == "scissors" && p2 == "rock"){
//         return "Player 2 won!";
//     }else if(p1 == "scissors" && p2 == "paper"){
//         return "Player 1 won!";
//     }else if(p1 == "scissors" && p2 == "scissors"){
//         return "Draw!";
//     }
// };


const rps = (p1, p2) => {
    if(p1 == p2){
        return "Draw!";
    }else if (p1 == "rock" && p2 == "paper" || p2 == "paper") {
        return "Nothing Yet"
    }
};

const rps1 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

// same but with ternary operator
function rps2(p1, p2){
    const rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
    if(p1 === p2)return 'Drow!';  
    return p2 === rules[p1] ? "player 1 won!" : "player 2 won!";
}

const allOption = ["rock", "paper", "scissors"];
const randomNum1 = Math.trunc(Math.random() * 3);
console.log(randomNum1)
const randomNum2 = Math.trunc(Math.random() * 3);
console.log(randomNum2)
console.log(allOption[randomNum1], allOption[randomNum2])
console.log(rps1(allOption[randomNum1], allOption[randomNum2])) 





setInterval(() => {
    const randomNum1 = Math.trunc(Math.random() * 3);
    console.log(randomNum1)
    const randomNum2 = Math.trunc(Math.random() * 3);
    console.log(randomNum2)
    console.log('--'.repeat(10))
}, 1000);


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    while (true) {
        console.log(Math.floor(Math.random() * 11));
        await sleep(1000);
    }
}
main();