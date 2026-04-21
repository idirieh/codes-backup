// Functions
console.log("\n********Functions********\n");

function greet(userName, year) {
  let age = 2023 - year;
  if (age < 18) {
    console.log("Sorry you are underage");
  } else {
    console.log(`Hello ${userName}, your age is ${age}`);
  }
}

greet("Ahmed", 1987);
greet("Khaled", 1983);
greet("Ahmed", 2008);

function generateYear(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i == exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYear(1987, 2023, 2021);

// default parameters
console.log("\n********default parameters********\n");

function sayHello(userName = "Unknown", age = "Unknown") {
  // if (age === undefined){
  //     age = "Unknown"
  // }
  // age = age || "Unknown" // same as the above
  console.log(`Hello ${userName}, you age is ${age}`);
}

sayHello("Ahmed");

// function rest parameters
console.log("\n********rest parameters********\n");

function add(...numbers) {
  let total = 0;
  for (num of numbers) {
    total += num;
  }
  return total;
}

console.log(add(10, 20, 30, 100));

// spread operator
console.log("\n********spread operator********\n");

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

(function () {
  arr2 = [...arr1]; // will copy a full array
  arr1[0] = "potato";
})();
console.log(arr2);

// challenge

function showDetails(...info) {
  let us = "";
  let age = 0;
  let hier = "";
  for (let i = 0; i < info.length; i++) {
    if (typeof info[i] == "string") {
      us = info[i];
    } else if (typeof info[i] == "number") {
      age = info[i];
    } else if (typeof info[i] == "boolean") {
      if (info[i] === true) {
        hier = "Your are Availabe for Hire";
      } else {
        hier = "Your are not Availabe for Hire";
      }
    }
  }
  return `Hello ${us}, Your age is ${age}, ${hier}`;
}

console.log(showDetails("Ahmed", 19, true));
console.log(showDetails(true, 18, "Mosa"));
console.log(showDetails(25, "Nasser", false));

console.log("*".repeat(15));

function showDetails1(...info) {
  let us = "";
  let age = 0;
  let hier = "";
  for (let i = 0; i < info.length; i++) {
    typeof info[i] == "string"
      ? (us = info[i])
      : typeof info[i] == "number"
      ? (age = info[i])
      : typeof info[i] == "boolean"
      ? (hier = "Your are Availabe for Hire")
      : (hier = "Your are Not Availabe for Hire");
  }

  return `Hello ${us}, Your age is ${age}, ${hier}`;
}

console.log(showDetails1("Ahmed", 19, true));
console.log(showDetails1(20, "Ahmed", true));
console.log(showDetails1(false, "Khaled", 18));

// anonymous function
console.log("\n********Anonymous Functions********\n");

let add1 = function (num1, num2) {
  return num1 + num2;
};

console.log(add1(5, 7)); //يجب الاستدعاء بعد التعريف المتغير

// some use case for anonymous function

// document.getElementById("show").onclick = function () {
//   console.log("show");
// };

// Arrow functions
console.log("\n********Arrow Functions********\n");

let print10 = () => {
  return 10;
};

console.log(print10());

let print20 = () => 20;

console.log(print20());

let printNum = (num) => num; // works for one parameter only

console.log(printNum(30));

console.log("\n********Global and Local Scope********\n");

// local and global scope

var x = 1;
let y = 2;
var z = 3;

function numbers() {
  var x = 10;
  let y = 20;
  var z = 30;
  console.log(`this is inside black ${x}`);
  console.log(`this is inside black ${y}`);
  console.log(`this is inside black ${z}`);
}

numbers();
console.log(`From global scope ${x}`);
console.log(`From global scope ${y}`);
console.log(`From global scope ${z}`);

let names = function (...nam) {
  return `String {${nam.slice().join("}, ")} \\ `;
};

console.log(names("Osama", "Mohammed", "Ahmed"));

// Declare the myGlobal variable below this line


let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal here
  let oopsGlobal = 5; //because of let is now local scope
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

//   console.log(oopsGlobal)
