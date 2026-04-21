// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function main() {
//     while (true) {
//         console.log(Math.floor(Math.random() * 11));
//         await sleep(1000);
//     }
// }

// main();

function rgbToHex(r, g, b) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const hexR = componentToHex(r);
  const hexG = componentToHex(g);
  const hexB = componentToHex(b);
  return "#" + hexR + hexG + hexB;
}

console.log(rgbToHex(255, 255, 255));


function mergeAndOrder(array1, array2) {
    // write your code here
    let mergedArray  = [];
    array1.forEach(element => {
        mergedArray.push(element)
    });
    array2.forEach(element => {
        mergedArray.push(element)
    });
    return mergedArray.sort();
}

console.log(mergeAndOrder([1,2], [4,3])) // [1, 2, 3, 4]


console.log("*********** JS Closure ***********");

function outer(x) {
  function inner(y) {
    return x + y; // this inner func is the closure
  }
  return inner
}

let outerReturn = outer(10);
console.log(outerReturn);

outerReturn(2) // 12


console.log("*********** IIFE ***********");
(function () {
  console.log("IIFE")
})()

console.log("*********** Call Stack ***********");

function f1(){
  console.log('Call Stack')
}

function f2(){
  return f1()
}

function f3(){
  return f2()
}

f3()

console.log("*********** Recursion ***********");

function fetchWater(count){
  if(count == 0){
    console.log('No more water left!');
    return 
  }
  console.log('Fetching water...')
  fetchWater(count - 1)
}


console.log("*********** Coder Hub ***********");

// function repetitions(s) {
//   // write your code here
//   let myArr = s.split("");
//   let count = 0;
//   let newArr = []
//   console.log(s)
//   console.log(myArr);
//   for (let i = 0; i <= myArr.length; i++) {
//     if (myArr[i] == myArr[0]){
//       count++;
//     }
//     else if (myArr[i]) {

//     }
//   }
//   console.log(count);
// };

// let s = 'AAAAAAAAABBB';

// repetitions(s);

// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find( e => e > 18);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(first)

// function repetitions(s) {
//   // write your code here
//   let current_count = 1;
//   let largest = 1;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == s[i+1]) {
//       current_count ++;
//     }else {
//       if (current_count > largest){
//         largest = current_count;
//       }
//       current_count = 1
//     }
//   }

//   if (current_count > largest) {
//     largest = current_count;
//   }
//   console.log(largest)
// };

// let s = 'MZSDDDD';

// repetitions(s);



console.log("*********** largest and smallest***********");

let myNumbers = [2, 1, 21, 7, 99, 33, 5, 8];



function largest_number(arr) {
  let largest = 0;
  myNumbers.forEach(e => {
    if (e > largest) {
      largest = e;
    }
  });
  console.log(largest);
  
}

largest_number(myNumbers)

function smallest_number(arr) {
  let smallest = null;
  myNumbers.forEach(e => {
    if (smallest == null || e < smallest) {
      smallest = e;
    }
  });
  console.log(smallest);
  
}

smallest_number(myNumbers)

let word = 'Whaat';

console.log(word.slice(0, -1))

// chaining methods
const num = '5:10:15'
// const numbersArr = num.split(':').map(Number).filter((n) => n > 7).join(',')
const numbersArr = num.split(':').map(Number).reduce((a, n) => a+n)
console.log(numbersArr)

//* check if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// check if a string contains only digits
function isDigits(str) {
  return /^\d+$/.test(str);
} 


//*****/

const people = [
    { name: 'John', age: 30 ,city: 'New York', email: 'john@gmail.com'},
    { name: 'Jane', age: 25, city: 'Los Angeles', email: 'jane@example.com'},
    { name: 'Jack', age: 25, city: 'Chicago', email: 'jack@example.com' },
    { name: 'Jim', age: 35, city: 'New York', email: 'Jim@gmail.sa' },
    { name: 'Jack', age: 28, city: 'Los Angeles', email: 'Jack@hotmail.com' },
    { name: 'Jim', age: 35, city: 'Chicago', email: 'Jime@example.com' }
]

const newArr = []
people.forEach(element => { 
  if(!element.email.includes('gmail') && !element.email.includes('hotmail')){
    newArr.push(element)
  }  
});

console.log(newArr)



/*****/

const array = [1, 2, 3, 3, 4, 5, 5, 6, 2, 3, 6];
const set = new Set(array);

console.log(set); 



/*******/


function repetitions(s) {
    // write your code here
    let maxCount = 0
    let currentCart = ''
    let count = 0
    let letters = s.split('')

    for(let i = 0; i < letters.length; i++){
      for(n of letters){
        if(n == letters[i]){
          count++
        }else if(count > maxCount){
          maxCount = count
        }
      }
    }
    
    return maxCount
}

s = 'AMMMDDCCCMD'

console.log(repetitions(s))


function repetitions(s) {
    let maxCount = 0;
    let count = 1;
    
    for (let i = 1; i < s.length; i++) {

        if (s[i] === s[i - 1]) {
            count++;  
        } else {

            if (count > maxCount) {
                maxCount = count;
            }
            count = 1;
        }
    }

    if (count > maxCount) {
        maxCount = count;
    }
    
    return maxCount;
}

let s = 'MZSDDDD';
console.log(repetitions(s)); 
