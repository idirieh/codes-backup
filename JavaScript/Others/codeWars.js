function isDivisable(n, x, y){
    const divisableByX = n % x == 0;
    const divisableByY = n % y == 0;
    return divisableByX && divisableByY
}

console.log(isDivisable(12, 7, 5))

let toString = 25;
console.log(typeof toString)
console.log(typeof toString.toString())

function numberToString(num) {
  // Return a string of the number here!
  return typeof num.toString()
}

console.log(numberToString(52))

function evenOrOdd(number) {
  return number % 2 == 0 ? 'Even' : 'Odd'
}

console.log(evenOrOdd(8))

const evenOrOdd = number => number % 2 == 0 ? 'Even' : 'Odd';

console.log(evenOrOdd(9))