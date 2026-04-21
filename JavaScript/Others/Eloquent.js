

/*
Write a JavaScript function called checkGrade that takes a number score (0–100) as input and prints out the corresponding letter grade based on the following scale:

90 - 100: A

80 - 89: B

70 - 79: C

60 - 69: D

0 - 59: F

If the score is not between 0 and 100, print "Invalid score".
*/

function checkGrade(score) {
    // if(score >= 90 && score <= 100){
    //     console.log('Grade: A')
    // } else if (score >= 80 && score <= 89){
    //     console.log('Grade: B')
    // } else if (score >= 70 && score <= 79){
    //     console.log('Grade: C')
    // } else if (score >= 60 && score <= 69){
    //     console.log('Grade: D')
    // } else if (score <= 59 && score >= 0){
    //     console.log('Grade: F')
    // } else {
    //     console.log("Invalid score")
    // }


    switch (score) {
        case (score >= 90 && score <= 100):
            console.log('Grade: A')
            break;
        case (score >= 80 && score <= 89):
            console.log('Grade: A')
            break;
        case (score >= 70 && score <= 79):
            console.log('Grade: A')
            break;
        case (score >= 60 && score <= 69):
            console.log('Grade: A')
            break;
        case (score >= 0 && score < 60):
            console.log('Grade: A')
            break;
        default:
            console.log("Invalid score")
    }
}

checkGrade(95)


let n = 0
while(n <= 7){
    console.log('#'.repeat(n))
    n++
}



let list = [];
let a = 0
while(a < 7){    
    list.push('#')
    console.log(list.join(''))
    a++
}


let line = "";
for (let i = 0; i < 7; i++) {
  line += "#";
  console.log(line);
}


/*

FIZZBUZZ
Write a program that uses console. log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

*/

// for(let n = 0; n <= 100; n++) {
//     let divisibleByThree = n % 3 == 0;
//     let divisibleByFive = n % 5 == 0;

//     if(divisibleByThree){
//         console.log('Fizz')
//     }else if(divisibleByFive && !divisibleByThree){
//         console.log('Buzz')
//     }else if(divisibleByFive && divisibleByThree){
//         console.log('FizzBuzz')
//     }else {
//         console.log(n)
//     }


    
// }


for(let n = 1; n <= 100; n++) {

    if(n % 3 == 0 && n % 5 != 0){
        console.log('Fizz')
    }else if(n % 5 == 0 && n % 3 != 0){
        console.log('Buzz')
    }else if(n % 3 == 0 && n % 5 == 0){
        console.log('FizzBuzz')
    }else {
        console.log(n)
    }

    
}


/*

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

*/

// let grid = ''

// for(let n = 0; n <= 20; n++){
//     if(n % 2 == 0){
//         grid += '#'
//     }else {
//         grid += '*'
//     }
    
//     console.log(grid)
// }

// let grid = ''

// for(let n = 0; n <= 10; n++){
//     if(n % 8 == 0){
//         grid += '\n'
//     }else {
//         grid += '*#'
//     }
    
//     console.log(grid)
// }


// الحل الصحيح
let black = '#'
let white = ' ' 

for(let n = 1; n <= 8; n++){
    let row = ''
    for (let i = 0; i < 4; i++){
        row +=white+black
    }
    console.log(row); // هنا لاوم التنقيط
    [black, white] = [white, black]
    // console.log('black: ', black)
    // console.log('white: ', white)
}

// swap vars
let x = 1;
let y = 2;
console.log(x);
console.log(y);
[x, y] = [y, x];
console.log(x);
console.log(y);

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);



// Closure
function wrapValue(n) {
    let local = n;
    return () => local
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
let wrap3 = wrapValue(3);
console.log(wrap1())
console.log(wrap2())
console.log(wrap3())


function multiplier(factor) {
    return number => number * factor
}

let twice = multiplier(5);
console.log(twice(2))






