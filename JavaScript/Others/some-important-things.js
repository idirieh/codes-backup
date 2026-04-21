<<<<<<< HEAD
/*
In JavaScript, falsy values are values that are considered false when evaluated in a Boolean context. These include:

false

0

"" (empty string)

null

undefined

NaN

*/

// convert any number to binary or base-16 using to String method
const num = 77;
console.log(num.toString(16)) // to base-16
console.log(num.toString(2)) // to binary


// pad strart will fill any number with some entered digit number
console.log('2'.padStart(3, '0'))

// You can shorten the console.log
const c = console.log.bind(console);
c("This is a shortened log.");

// try and catch
// console.log(a + b); (the error code)

try{
    console.log(a + b);
} catch(err){
    // console.log(err);
    console.log('some error ')
}
console.log('This line to test');


// Here's a simple example of converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number (i.e binary number).
console.log((10).toString(2));

let totoal = 0;
let count = 1;

while(true){
    let balance = count;
    balance -= 11
    if(balance == 0) {
        break
    }
    totoal += count;
    count++;
}

console.log(totoal)

console.log(sum(range(1, 10)))

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

console.log(factorial(8))

let n = []
console.log(typeof n)
console.log('You can use typeof \nwhen you need the type of something in JS')
console.log(!true)
console.log(1 + 1 == 2 && 10 * 10 > 50) // الترتيب

let array = [1, 2, 3, 5]

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}

const Day = Object.freeze({
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
});

let today = Day.MONDAY;

if (today === Day.MONDAY) {
  console.log("It's Monday!");
}

let dada = 'Hello'

console.log(isNaN(dada))
console.log(Number.isNaN(dada))

let myNum = 5

console.log(isNaN(myNum))
console.log(Number.isNaN(myNum))

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
    if(score >= 90 && score <= 100){
        console.log('Grade: A')
    } else if (score >= 80 && score <= 89){
        console.log('Grade: B')
    } else if (score >= 70 && score <= 79){
        console.log('Grade: C')
    } else if (score >= 60 && score <= 69){
        console.log('Grade: D')
    } else if (score <= 59 && score >= 0){
        console.log('Grade: F')
    } else {
        console.log("Invalid score")
    }
}

checkGrade(41)


function checkGrade(score) {
    switch(true) {
        case (score >= 90 && score <= 100):
            console.log('Grade: A');
            break;
        case (score >= 80 && score <= 89):
            console.log('Grade: B');
            break;
        case (score >= 70 && score <= 79):
            console.log('Grade: C');
            break;
        case (score >= 60 && score <= 69):
            console.log('Grade: D');
            break;
        case (score <= 59 && score >= 0):
            console.log('Grade: F');
            break;
        default:
            console.log("Invalid score")
    }
}


checkGrade(41)


/*
🔍 Task: Login Validation
Write a JavaScript function validateLogin that checks if a user’s login credentials are valid. The function will take in two arguments: username and password.

Rules for valid credentials:
Username should be at least 5 characters long and not empty.

Password should:

Be at least 8 characters long.

Contain at least one uppercase letter, one lowercase letter, and one number.

If the username or password do not meet the criteria, display an appropriate error message:

If the username is invalid: "Username must be at least 5 characters."

If the password is invalid: "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number."

If both are valid: "Login successful!"

🧪 Example Usage:
js
Copy
Edit
validateLogin("john", "Pass123");   // Output: "Username must be at least 5 characters."
validateLogin("john123", "pass");   // Output: "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number."
validateLogin("john123", "Pass123"); // Output: "Login successful!"
This will test your understanding of multiple conditions inside if...else and how to combine them! Let me know how it goes, and I can help if you run into any issues!
*/

function validateLogin(user, pass) {
    const userLength = user.length >= 5;


    const passLength = pass.length >= 8;
    const hasUpperCase = pass.split('').some(e => e == e.toUpperCase());
    const hasLowerCase = pass.split('').some(e => e == e.toLowerCase());
    const hasNumber = /\d/.test(pass);
    
    // Checking UserName
    if (!userLength){
        console.log('Username must be at least 5 characters.')
        return false
    }


    // Checking Password
    if (!passLength){
        console.log('Password must be at least 8 characters.')
        return false
    }
    if (!hasNumber) {
        console.log('Password should contain Numbers')
        return false
    }
    if (!hasUpperCase) {
        console.log('Password should have at least one uppercase letter')
        return false
    }
    if (!hasLowerCase) {
        console.log('Password should have at least one lowercase letter')
        return false
    }
    console.log("Login successful!")
}

validateLogin("john123", "Paaass123")

// الحل من شات
function validateLogin1(username, password) {
  // Validate Username
  if (!username || username.length < 5) {
    console.log("Username must be at least 5 characters.");
    return; // Exit the function if username is invalid
  }

  // Validate Password
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (password.length < 8 || !hasUppercase || !hasLowercase || !hasNumber) {
    console.log("Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.");
    return; // Exit the function if password is invalid
  }

  // If both username and password are valid
  console.log("Login successful!");
}



//? Try is with Debugger

let a = b + 5;
console.log(a)
var b = 2
console.log(b)

function a() {
    return b
}

function b() {
    return c
}

function c() {
    console.trace('The GG')
    return 42
}

a()


let myName = 'ahmEd';



console.log(hasUpperCase)

//* Freecodecamb
function multipleAll(arr) {
    var product = 1;

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }

    return product
}

var product = multipleAll([[1,2], [3,4], [5,6,7]])
console.log(product)


const temp = {
    today: 74,
    tomorrow: 65,
    min: 61,
    max: 77
}


function convertTemp( { min, max} ){
    return max - min
}

console.log(convertTemp(temp))

//*checking types using RegEx
let person = "ADFSa1"
console.log(/[A-Z]/.test(person))
console.log(/[a-z]/.test(person))
console.log(/[a-zA-Z]/.test(person))
console.log(/\d/.test(person))

//* Object Destructing
const favouriteFilm = {
    title: "American Gangster",
    year: 2007,
    genre: "crime Action",
    star: "Denzel Washington",
    director: "Ridley Scott"
}

// using same props names
const {title, year, genre, star} =  favouriteFilm;
console.log(title, year)
// using diffrent names
const {title : bonbon} = favouriteFilm;
console.log(bonbon)

//* reading big numbers
const bankBalance = 9_007_199_254_740_991 // this is the max number in JS
console.log(bankBalance)
console.log(typeof bankBalance)

const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_345)

console.log(tomsBankBalanceGBP)

// sorting List

let myArr = [7, 2, 20, 9, 1, 3];
function sortArray(arr){
    let smallest = null;
    let newArr = [];
    const originalLength = arr.length
    for(let i = 0; i < originalLength; i++){
        console.log('outer: ', arr[i])
        for(let j = 0; j < arr.length; j++){
            console.log('inner: ', arr[j])
            if(smallest == null || arr[j] < smallest){
            smallest = arr[j]
        }
        }
        console.log('smallest: ', smallest)
        newArr.push(smallest)
        let index = arr.indexOf(smallest);
        arr.splice(index, 1);
        console.log(arr);
        smallest = null;
    }
    console.log(newArr)

}

sortArray(myArr)


// Same solution by LLM

// let myArr = [7, 2, 20, 9, 1, 3];

// function sortArray(arr) {
//     let newArr = [];
//     // Store the original length to avoid issues with arr.splice()
//     const originalLength = arr.length; 

//     for (let i = 0; i < originalLength; i++) {
//         // Find the smallest number in the current array
//         let smallest = arr[0];
//         let smallestIndex = 0;
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[j] < smallest) {
//                 smallest = arr[j];
//                 smallestIndex = j;
//             }
//         }
        
//         // Add the smallest number to the new array
//         newArr.push(smallest);
        
//         // Remove the smallest number from the original array
//         arr.splice(smallestIndex, 1);
//     }
    
//     return newArr;
// }

// let sortedArr = sortArray(myArr);
// console.log(sortedArr); // Output: [1, 2, 3, 7, 9, 20]


//* جمع رقمين عشوائيين
setInterval(() => {
    let num1 = Math.round(Math.random() * 10)
    let num2 = Math.round(Math.random() * 10)
    console.log(num1)
    console.log(num2)
    console.log('*****************')
    setTimeout(() => {
        console.log('Result ', num1 + num2)
    }, 3000);
},3000)
=======
/*
In JavaScript, falsy values are values that are considered false when evaluated in a Boolean context. These include:

false

0

"" (empty string)

null

undefined

NaN

*/

// convert any number to binary or base-16 using to String method
const num = 77;
console.log(num.toString(16)) // to base-16
console.log(num.toString(2)) // to binary


// pad strart will fill any number with some entered digit number
console.log('2'.padStart(3, '0'))

// You can shorten the console.log
const c = console.log.bind(console);
c("This is a shortened log.");

// try and catch
// console.log(a + b); (the error code)

try{
    console.log(a + b);
} catch(err){
    // console.log(err);
    console.log('some error ')
}
console.log('This line to test');


// Here's a simple example of converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number (i.e binary number).
console.log((10).toString(2));

let totoal = 0;
let count = 1;

while(true){
    let balance = count;
    balance -= 11
    if(balance == 0) {
        break
    }
    totoal += count;
    count++;
}

console.log(totoal)

console.log(sum(range(1, 10)))

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

console.log(factorial(8))

let n = []
console.log(typeof n)
console.log('You can use typeof \nwhen you need the type of something in JS')
console.log(!true)
console.log(1 + 1 == 2 && 10 * 10 > 50) // الترتيب

let array = [1, 2, 3, 5]

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
}

const Day = Object.freeze({
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
});

let today = Day.MONDAY;

if (today === Day.MONDAY) {
  console.log("It's Monday!");
}

let dada = 'Hello'

/*
✅ Summary Table:

| Value   | isNaN(value) | Number.isNaN(value) |
|---------|--------------|---------------------|
| 'Hello' | true         | false              |
| 5       | false        | false              |


⚠️ Why does it behave like this?
- isNaN converts the value to a number, so non-numeric strings become NaN.
- Number.isNaN does NOT convert, only returns true if the value is literally NaN.
*/
console.log(isNaN(dada))
console.log(Number.isNaN(dada))

let myNum = 5

console.log(isNaN(myNum))
console.log(Number.isNaN(myNum))

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
    if(score >= 90 && score <= 100){
        console.log('Grade: A')
    } else if (score >= 80 && score <= 89){
        console.log('Grade: B')
    } else if (score >= 70 && score <= 79){
        console.log('Grade: C')
    } else if (score >= 60 && score <= 69){
        console.log('Grade: D')
    } else if (score <= 59 && score >= 0){
        console.log('Grade: F')
    } else {
        console.log("Invalid score")
    }
}

checkGrade(41)


function checkGrade(score) {
    switch(true) {
        case (score >= 90 && score <= 100):
            console.log('Grade: A');
            break;
        case (score >= 80 && score <= 89):
            console.log('Grade: B');
            break;
        case (score >= 70 && score <= 79):
            console.log('Grade: C');
            break;
        case (score >= 60 && score <= 69):
            console.log('Grade: D');
            break;
        case (score <= 59 && score >= 0):
            console.log('Grade: F');
            break;
        default:
            console.log("Invalid score")
    }
}


checkGrade(41)


/*
🔍 Task: Login Validation
Write a JavaScript function validateLogin that checks if a user’s login credentials are valid. The function will take in two arguments: username and password.

Rules for valid credentials:
Username should be at least 5 characters long and not empty.

Password should:

Be at least 8 characters long.

Contain at least one uppercase letter, one lowercase letter, and one number.

If the username or password do not meet the criteria, display an appropriate error message:

If the username is invalid: "Username must be at least 5 characters."

If the password is invalid: "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number."

If both are valid: "Login successful!"

🧪 Example Usage:
js
Copy
Edit
validateLogin("john", "Pass123");   // Output: "Username must be at least 5 characters."
validateLogin("john123", "pass");   // Output: "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number."
validateLogin("john123", "Pass123"); // Output: "Login successful!"
This will test your understanding of multiple conditions inside if...else and how to combine them! Let me know how it goes, and I can help if you run into any issues!
*/

function validateLogin(user, pass) {
    const userLength = user.length >= 5;


    const passLength = pass.length >= 8;
    const hasUpperCase = pass.split('').some(e => e == e.toUpperCase());
    const hasLowerCase = pass.split('').some(e => e == e.toLowerCase());
    const hasNumber = /\d/.test(pass);
    
    // Checking UserName
    if (!userLength){
        console.log('Username must be at least 5 characters.')
        return false
    }


    // Checking Password
    if (!passLength){
        console.log('Password must be at least 8 characters.')
        return false
    }
    if (!hasNumber) {
        console.log('Password should contain Numbers')
        return false
    }
    if (!hasUpperCase) {
        console.log('Password should have at least one uppercase letter')
        return false
    }
    if (!hasLowerCase) {
        console.log('Password should have at least one lowercase letter')
        return false
    }
    console.log("Login successful!")
}

validateLogin("john123", "Paaass123")

// الحل من شات
function validateLogin1(username, password) {
  // Validate Username
  if (!username || username.length < 5) {
    console.log("Username must be at least 5 characters.");
    return; // Exit the function if username is invalid
  }

  // Validate Password
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  if (password.length < 8 || !hasUppercase || !hasLowercase || !hasNumber) {
    console.log("Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.");
    return; // Exit the function if password is invalid
  }

  // If both username and password are valid
  console.log("Login successful!");
}



//? Try is with Debugger

let a = b + 5;
console.log(a)
var b = 2
console.log(b)

function a() {
    return b
}

function b() {
    return c
}

function c() {
    console.trace('The GG')
    return 42
}

a()


let myName = 'ahmEd';



console.log(hasUpperCase)

//* Freecodecamb
function multipleAll(arr) {
    var product = 1;

    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }

    return product
}

var product = multipleAll([[1,2], [3,4], [5,6,7]])
console.log(product)


const temp = {
    today: 74,
    tomorrow: 65,
    min: 61,
    max: 77
}


function convertTemp( { min, max} ){
    return max - min
}

console.log(convertTemp(temp))

//*checking types using RegEx
let person = "ADFSa1"
console.log(/[A-Z]/.test(person))
console.log(/[a-z]/.test(person))
console.log(/[a-zA-Z]/.test(person))
console.log(/\d/.test(person))

//* Object Destructing
const favouriteFilm = {
    title: "American Gangster",
    year: 2007,
    genre: "crime Action",
    star: "Denzel Washington",
    director: "Ridley Scott"
}

// using same props names
const {title, year, genre, star} =  favouriteFilm;
console.log(title, year)
// using diffrent names
const {title : bonbon} = favouriteFilm;
console.log(bonbon)

//* reading big numbers
const bankBalance = 9_007_199_254_740_991 // this is the max number in JS
console.log(bankBalance)
console.log(typeof bankBalance)

const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_345)

console.log(tomsBankBalanceGBP)

// sorting List

let myArr = [7, 2, 20, 9, 1, 3];
function sortArray(arr){
    let smallest = null;
    let newArr = [];
    const originalLength = arr.length
    for(let i = 0; i < originalLength; i++){
        console.log('outer: ', arr[i])
        for(let j = 0; j < arr.length; j++){
            console.log('inner: ', arr[j])
            if(smallest == null || arr[j] < smallest){
            smallest = arr[j]
        }
        }
        console.log('smallest: ', smallest)
        newArr.push(smallest)
        let index = arr.indexOf(smallest);
        arr.splice(index, 1);
        console.log(arr);
        smallest = null;
    }
    console.log(newArr)

}

sortArray(myArr)


// Same solution by LLM

// let myArr = [7, 2, 20, 9, 1, 3];

// function sortArray(arr) {
//     let newArr = [];
//     // Store the original length to avoid issues with arr.splice()
//     const originalLength = arr.length; 

//     for (let i = 0; i < originalLength; i++) {
//         // Find the smallest number in the current array
//         let smallest = arr[0];
//         let smallestIndex = 0;
//         for (let j = 1; j < arr.length; j++) {
//             if (arr[j] < smallest) {
//                 smallest = arr[j];
//                 smallestIndex = j;
//             }
//         }
        
//         // Add the smallest number to the new array
//         newArr.push(smallest);
        
//         // Remove the smallest number from the original array
//         arr.splice(smallestIndex, 1);
//     }
    
//     return newArr;
// }

// let sortedArr = sortArray(myArr);
// console.log(sortedArr); // Output: [1, 2, 3, 7, 9, 20]


//* جمع رقمين عشوائيين
setInterval(() => {
    let num1 = Math.round(Math.random() * 10)
    let num2 = Math.round(Math.random() * 10)
    console.log(num1)
    console.log(num2)
    console.log('*****************')
    setTimeout(() => {
        console.log('Result ', num1 + num2)
    }, 3000);
},3000)


/*
You can calculate compound interest using this formula:

A = P × (1 + r/n)^(n × t)

Where:

A = total amount after interest  
P = starting amount (principal)  
r = annual interest rate (in decimal form, e.g., 5% → 0.05)  
n = how many times the interest is added per year (compounded)  
t = number of years  

Example:  
You invest $1,000 at 5% annual interest, compounded monthly, for 3 years.  

P = 1000  
r = 0.05  
n = 1  
t = 3  

A = 1000 × (1 + 0.05/12)^(1 × 3)
*/
const compoundInterstCalculator = (p, r, n, t) => {
    return  p * ((1+(r/n)) ** (t*n))
}

console.log(compoundInterstCalculator(100, 0.05, 1, 3))
>>>>>>> main
