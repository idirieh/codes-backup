// Numbers
console.log("\n********Numbers********\n");

console.log(1000000);
console.log(1_000_000);
console.log(1);
console.log(1 ** 6);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

// Number methods
console.log("\n********Number methods********\n");

console.log((100).toString());
console.log((100).toString());
console.log((100.5545555).toFixed(2)); // تحديد عدد الكسور، مع الجبر الكسر
console.log(+"100"); // تحول الى رقم
console.log(parseInt("100.500")); // تحول الى رقم وتحولها الى رقم صحيح
console.log(parseInt("10110", 2)); // تحول من رقم ثنائي الى عشري
console.log(parseFloat("100.500")); //تحول الى رقم مع الكسور

console.log(Number.isInteger("100"));
console.log(Number.isInteger("100.500"));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Ahemd" / 5));

// Math methods
console.log("\n********Math methods********\n");

console.log(Math.round(99.2)); // يقرب الى اقرب رقم صحيح للأعلى وللأقل
console.log(Math.round(99.5));

console.log(Math.ceil(99.2)); //يقرب الى أعلى رقم
console.log(Math.floor(99.9)); // بقرب الى اقل رقم بعده
console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));
console.log(Math.pow(2, 4)); // الأس
console.log(Math.random()); //يعطيك رقم عشوائي
console.log(Math.trunc(99.6)); // يتخلص من الكسر
// console.log()

// challenge
console.log("\n********challange-1********\n");

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find the smallest number should be integer
console.log(Math.trunc(Math.min(a, b, c, d)));

console.log(Math.pow(d, a));

console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(d.toFixed());

// String methods
console.log("\n********String methods********\n");

let theName = " Ahmed ";
console.log(theName[1]);
console.log("charAt : ", theName.charAt(1));
console.log("The lenght: ", theName.length);
console.log(theName.trim());
console.log(theName.toUpperCase());
console.log(theName.toLocaleLowerCase());
console.log(theName.trim().charAt(2).toLocaleUpperCase()); // chaining

let azero = "Elzero web school";
console.log(azero.indexOf("web"));
console.log(azero.indexOf("web", 8));

console.log(azero.indexOf("o")); //5
console.log(azero.lastIndexOf("o")); // يبدأ من الأخير والنتيجة 15

console.log("slice: ", azero.slice(0, 2));
console.log("slice: ", azero.slice(-5, -2));

console.log(azero.repeat(2));

console.log(azero.split(" ", 2));

console.log(azero.substring(2, 6)); // zero
console.log(azero.substring(-10, 6)); // Elzero
console.log(azero.substring(azero.length - 5, azero.length - 3)); // ch

console.log(azero.substr(0, 6)); //Elzero

console.log(azero.includes("web")); //true
console.log(azero.startsWith("E")); //true
console.log(azero.startsWith("E", 2)); //false
console.log(azero.endsWith("l")); //true
console.log(azero.endsWith("o", 6)); //true

// challenges
console.log(azero.charAt(2).toUpperCase() + azero.slice(3, 6));
console.log(azero.split(" ", 1));

// comparison
console.log("\n********Comparison********\n");

console.log(10 == "10"); //true
console.log(-100 == "-100", "\n"); //true

console.log(10 != "10"); //false
console.log(-100 != "-100", "\n"); //false

console.log(10 === "10"); //false
console.log(-100 === -100, "\n"); //true

console.log(10 !== "10"); //true
console.log(-100 !== -100, "\n"); //false

console.log(true); //true
console.log(!true); //false
console.log(!(10 == "10")); //false

// Logical operator
console.log("\n********Logical operator********\n");

// and
console.log(10 == 10 && 10 > 5 && 10 < 5); //false

// or
console.log(10 == 10 || 10 > 5 || 10 < 15); //true

// if conditions
console.log("\n********if Conditions********\n");

let newName = "Ahmed";
let gender = "male";
let theAge = 30;

if (gender === "male") {
  console.log("Mr.", newName);
} else {
  console.log("Ms.", newName);
}

// Ternary Operator
console.log("\n********Ternary Operator********\n");
// condition ? statement if true : statement if false

let num = 2 + 3;

let result = num == 5 ? "yes" : "no";

console.log(result);

console.log(num == 5 ? "yes" : "no");

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(5));

// smae as the above
gender === "male" ? console.log("Mr.", newName) : console.log("Ms.", newName);
console.log(`My name is ${gender === "male" ? "Mr." : "Ms."} ${newName}`);

// short if statement
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("larger than 60")
  : console.log("unknown");
