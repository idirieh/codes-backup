// loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let number = 0;
while (number < 5) {
    console.log(number);
    number++;
}

const course = 'JavaScript'
x = 5
do{
    console.log(course);
    x++;
}while(x < 5)
console.log('***')


for (let index = 1; index <= 10; index++) {
    if(index % 2 == 0){
        console.log("Next");
        continue;
    }
    console.log(index);
}

for(let index = 1; index <= 10; index++){
    if(index % 2 == 0){
        console.log("Stop");
        break;
    }
    console.log(index);
}

const colors = ['red', 'green', 'blue', 'black', 'white'];
for(let n = 0; n < colors.length; n++) {
    console.log(colors[n]);
}

// اختصار للفوق زي ان في بايثون
for(let color of colors){
    console.log(color);
}

const word = 'Welcome to JavaScript';
for(let char of word){
    console.log(char);
}

const arr1 = ['a', 'b', 'c'];

for (let s of arr1) {
    console.log(s);
}

// functions

function pringNumbers(age){
    if(age < 12){
        console.log('Sorry you are kid');
    }else{
        console.log('Welcome to the game');
    }
}

pringNumbers(25)

function toNumber(to) {
    for(let y = 1; y <= to; y++){
        console.log(y);
    }
        
}

toNumber(3)
toNumber(13)

function adding(fnum, snum) {
    let result = fnum + snum;
    return result;
}

console.log(adding(8,2))

function adding1(fnum, snum) {
    return fnum + snum;;
}

console.log(adding1(8,2))

// let val = adding1(2,7)
// toNumber(val)
toNumber(adding1)

