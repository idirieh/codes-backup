//* Scope Chain
// "use strict"
// function a(){
    
//     let x = 5;
//     console.log('insde A: ', x);
//     function b(){
//         // console.log('insde B before: ', x)
//         let x = 8 
//         console.log('insde B after: ',x)
//         function c(){
//             // if multiple bindings have the same name, the innermost one is the one that the code will see and use.
//             console.log('insde C after: ',x)
//         }
//         c()
//     } 
//     return b
// }

// a()

// simplest way to count from 1 to 10
let num = 1;

while(num < 11){
    console.log(num);
    num++;
}



// function logFirstName() {
//     let firstName = 'Tom'
//     console.log(firstName)
// }

// firstName = 'John'

// logFirstName()


// function countUp(start, end) {
//     console.log(start);
//     if(start == end){
//         return start
//     }
//     countUp(start + 1, end)
// }

// countUp(2, 6)

// let runningTotal = 5
// function sumToN(n) {
//     if (n <= 0) {
//         return 0 
//     } else {
//         console.log(runningTotal)
//         runningTotal += n-1
//         return n + sumToN(n -1)
//     }
// }

// console.log(sumToN(5))

/*
| S|C|R|I|M|B|A
| 0|1|2|3|4|5|6
| 7|6|5|4|3|2|1
*/
let str = 'SCRIMBA'

let str1 = str.slice(-1)
console.log(str1)
console.log(str.slice(3))



function reverseStr(str) {
    if(str.length == 0){
        return str
    }else {
        return str.slice(-1) + reverseStr(str.slice(0, -1))
    }
}

// another way 
function reverseStr(str) {
    if (str.length === 0) {
        return str
    } else {
        return reverseStr(str.slice(1)) + str.slice(0, 1)
    }
/*
Challenge:
    1. Write logic for a recursive function 
       that reverses a string.
    🛟 hint.md for help!
*/
}
// A + SCRIMB
// B + SCRIM
// M + SCRI
// I + SCR
// R + SC
// C + S
// S + ""

// reverseStr(SCRIMB)
// reverseStr(SCRIM)
// reverseStr(SCRI)
// reverseStr(SCR)
// reverseStr(SC)
// reverseStr(S)
// reverseStr("")



console.log(reverseStr('SCRIMBA'))




const sysMessage = warn => message => `[${warn.toUpperCase()}]: "${message}"`

const warn = sysMessage('warring')

console.log(warn("This is wrong file"))


function tryTimeOut() {   
    setInterval(() => {
        
    }, 2000); 
    let timeout = setTimeout(() => timeout = null, 2000);
    console.log(timeout)
    // setTimeout(() => console.log('Hi there'), 4000);
}
tryTimeOut()

// const timeout = setTimeout(() => console.log('Hi'), 2000)
// console.log(timeout)

// setTimeout(() => console.log('Hi'), 2000)



const timeoutId = null;
if(!timeoutId){
    console.log('!timeoutId')
}
if(timeoutId == null){
    console.log('!timeoutId')
}

console.log(!timeoutId)

// random hex color

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hexColor = ''
for(let i = 0; i < 6; i++){
    let randomNum = Math.trunc(Math.random() * hex.length);
    hexColor += hex[randomNum]    
}

console.log(hexColor)

let color = '#'
for (let i = 0; i < 6; i++) {
    const ranNum = Math.floor(Math.random() * 16)
    color += '0123456789ABCDEF'[ranNum] //Scrimba way
}

// Generator
const slidesArr = [
    "1. Intro Slide", 
    "2. The current situation", 
    "3. Setbacks", 
    "4. Plans", 
    "5. A Positive Future"
]

function* generator(arr){
    for(item of arr){
        yield item
    }
}

const arraySlider = generator(slidesArr)

for(n of slidesArr){
    console.log(arraySlider.next())
}
console.log(arraySlider.next())
console.log(arraySlider.next())
console.log(arraySlider.next())



function* infiniteNumbers(){
    let num = 1;

    while(true){
        yield num++;
    }
}

const numbers = infiniteNumbers()

console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())
console.log(numbers.next())


setInterval(() => {
    const randomIndex = Math.floor(Math.random() * 16)
    console.log(randomIndex)
    let color = '0123456789ABCDEF'[randomIndex]
    // console.log(color)
}, 1000);



function* randomHexGenerator() {
    while (true) {
        // Generate a random number between 0 and 0xFFFFFF (16777215 in decimal)
        const randomColor = Math.floor(Math.random() * 0x1000000);
        // Convert to hex string and pad with zeros to ensure 6 digits
        const hexCode = '#' + randomColor.toString(16).padStart(6, '0');
        yield hexCode;
    }
}

// Example usage:
const hexGenerator = randomHexGenerator();

console.log(hexGenerator.next().value); // e.g. "#3a7b9f"
console.log(hexGenerator.next().value); // e.g. "#e41f2c"
console.log(hexGenerator.next().value); // e.g. "#00ff88"



let tenBase = 2;
console.log(tenBase.toString(2))



setInterval(() => {
    const randomNum = Math.floor(Math.random() * 0xFFFFFF)
    console.log(`#${randomNum.toString(16).padStart(6, "0")}`)
}, 1000);



function* hexGenerator(){
    while(true){
        const randomNum = Math.floor(Math.random() * 0xFFFFFF)
        const hexColor = '#' + randomNum.toString(16).padStart(6, '0')
        yield hexColor
    }              
    
}

const colorss = hexGenerator()
console.log(colorss.next().value)
console.log(colorss.next())
