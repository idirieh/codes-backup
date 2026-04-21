// nullish coalescing
console.log("\n********nullish coalescing********\n");
let price = 0;

console.log(`The price is ${price}`);
console.log(`The price is ${price || 200}`); // ما ترجع اي قيمة خاطئة او غير معرفة
console.log(`The price is ${price ?? 200}`); // ماترجع قيمة غير معرفة

// switch statement
console.log("\n********switch statement********\n");

let day = "Saturday";

switch (day) {
  case "Sunday":
    console.log("it's Sunday");
    break;
  case "Monday":
    console.log("it's Monday");
    break;
  case "Saturday":
    console.log("it's Saturday");
    break;
  default:
    console.log("it's Unknown");
}

// Array
console.log(`\n${"*".repeat(10)} Arrays ${"*".repeat(10)}\n`);

let students = ["Ahmed", "Khaled", "Mosa"];
console.log(students[1]);
console.log(students);
students[1] = "Nasser";
console.log(students);

console.log(Array.isArray(students));

// Arrays methods

students.push("Waleed"); // add new item to end of the array
console.log(students);
students.pop(); // remove the last item
console.log(students);
students.unshift("Mohammed"); // add new item to start of the array
console.log(students);
students.shift(); // remove the first item
console.log(students);

let myFriends = ["Ahmed", "Khaled", "Mosa", "Ahmed"];

console.log(myFriends.indexOf("Ahmed"));
console.log(myFriends.indexOf("Ahmed", 2));

console.log(myFriends.lastIndexOf("Ahmed"));
console.log(myFriends.lastIndexOf("Ahmed", 2));

console.log(myFriends.includes("Ahmed"));
console.log(myFriends.includes("Ahmed", 2));

console.log(myFriends.slice()); //All
console.log(myFriends.slice(1, 3)); // from 1 to 3 but not include 3
console.log(myFriends.slice(-2)); // [ 'Mosa', 'Ahmed' ]

console.log(myFriends.splice(0, 1, "Nasser")); // start at 0, remove 1, add the new items "Nasser    "
console.log(myFriends);

let myNumbers = [10, 20, -100, 90, "Ahmed", 1000, -10, "Ismail", -90];

console.log(myNumbers.sort());
console.log(myNumbers.reverse());

// joining the arrays

let allArrays = students.concat(myFriends, myNumbers, "Hello", [999, 888]);
console.log(allArrays);

let allPeople = students.concat(myFriends);
console.log(allPeople);

// joining all items in the array and converting it to string
console.log(allPeople.join());
console.log(allPeople.join(""));
console.log(allPeople.join(" # "));
console.log(allPeople.join(" | ").toUpperCase());

// challenge

let zero = 0;

let counter = 3;

let myChallenge = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

let aChallenge = myChallenge.slice(0, 4).reverse();
console.log(aChallenge);

let bChallenge = myChallenge.slice();

// loops
console.log(`\n${"*".repeat(10)} Loops ${"*".repeat(10)}\n`);

// for loops

let teachers = [
  "Maximilian Santillan",
  10,
  15,
  "Julius Cutler",
  "Jonathon Deluca",
  "Johan Gandy",
  "Javier Samples",
  "Kali Sizemore",
  33,
  "Renae Boland",
  "Jeremiah Thai",
  19,
  "Sheila Strain",
  "Ester Unger",
];

for (let i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
}

// remove the numbers

let onlyNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (typeof teachers[i] == "string") {
    onlyNames.push(teachers[i]);
  }
}

console.log(onlyNames);

// nested loops

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Blue"];

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i])
//     for (let j = 0; j < colors.length; j++) {
//         console.log(`- ${colors[j]}`)
//     }
// }

// // break and continue
// for (let i = 0; i < products.length; i++) {
//     if (products[i] == "Pen"){
//         continue
//     }
//     console.log(products[i])
//     for (let j = 0; j < colors.length; j++) {
//         if (colors[j] == "Blue") {
//             break
//         }
//         console.log(`- ${colors[j]}`)
//     }
// }

// label: breaking the main loop
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] == "Green") {
      break mainLoop;
    }
  }
}

// showing in the html page using for loop
// let showCount = 3

// document.write(`<h2>Show ${showCount} Products</h2>`)

// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`)
//     document.write(`<h3>[${i + 1}] ${products[i]}</h3>`)
//     for (let j = 0; j < colors.length; j++) {
//         document.write(`<p>${colors[j]}</p>`)
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`)
//     document.write(`</div>`)
// }

// while loop

let index = 0;

// while (index < 10) {
//     console.log(index)
//     index++
// }

// while (true) {
//     console.log(index)
//     index++
//     if (index == 5) {
//         break
//     }

// }

// do while

let num = 0;

while (false) {
  console.log(num);
  num++;
}
do {
  console.log(num);
  num++;
} while (false); // this code will run one time

console.log(num);
