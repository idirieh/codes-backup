// this file is with js102

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
function sub(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
function mul(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

console.log(sum(5, 2));
console.log(sub(5, 2));
console.log(mul(5, 2));

function operation(firstNumber, secondNumber, opCallback) {
  return `(${opCallback(firstNumber, secondNumber)})`;
}

console.log(operation(5, 2, sum));
console.log(operation(5, 2, sub));
console.log(operation(5, 2, mul));

// Arrow function
console.log(operation(5, 6, (firstNumber, secondNumber) => firstNumber + secondNumber));

const div = (firstNumber, secondNumber) => firstNumber / secondNumber;
console.log(operation(8, 2, div));

/* ------------- */

function format(message, formatCallback) {
  return formatCallback(message);
}

function htmlFormat(message) {
  return `<div>${message}</div>`;
}

function jsonFormat(message) {
  return `{"message": ${message}}`;
}

console.log(format("Welcome to JavaScript", htmlFormat));
console.log(format("Welcome to JavaScript", jsonFormat));

/* ------------- */

const colors = ["red", "green", "blue"];

colors.forEach(function (currentValue, index, array) {
  console.log(index, currentValue);
});

// same results
// for(let x = 0; x < colors.length; x++){
//     console.log(colors[x])
// }

// check if some
const ages = [11, 17, 22, 9];

// تتأكد من وجود اي عنصر يطابق الشرط
const hasAdult = ages.some(function (element, index, array) {
  return element >= 18;
});
console.log(hasAdult); // true

// checks if all

// تتأكد من مطابقة جميع عناصر المصفوفة من الشرط
const areAdults = ages.every(function (element, index, array) {
  return element >= 18;
});

console.log(areAdults); // false

// تتأكد من وجود العنصر في المصفوفة
const isContainRed = colors.includes("red"); // هناك خيار البدء من العنصر 1
console.log(isContainRed);

// checks item index
const index = colors.indexOf("green");
console.log(index);

// checks item index from last of the array
const lastIndex = colors.lastIndexOf("green");
console.log(lastIndex);

// checks the item index with the correct condition
const ageIndex = ages.findIndex(function (element) {
  // هناك خيار البدء من العنصر 1
  return element >= 25;
});

console.log(ageIndex);


// checks if the condition is applys to the array items
const myNumbers = [2, 3, 7, 4, 9];

const evenNumbers = myNumbers.filter(function(currentValue) {
  return currentValue % 2 === 0;
})

console.log(evenNumbers)

const squaredNumbers = myNumbers.map(function(currentValue, index, array) {
  return currentValue * currentValue
})

console.log(squaredNumbers)

const total = myNumbers.reduce(function(accumulator, currentValue, index, array){
  return accumulator + currentValue
}, 100) // اختياري في حال جمع مجموع مع رقم أخر

console.log(total)

const newNumbers = myNumbers.slice(1, 4)
console.log(newNumbers);

console.log(myNumbers.sort())
console.log(myNumbers.reverse())
console.log(myNumbers.splice(2, 2, "red", "green"))
const joinArray = colors.join(",")
console.log(joinArray)
const splitArray = joinArray.split(",");
console.log(splitArray)
