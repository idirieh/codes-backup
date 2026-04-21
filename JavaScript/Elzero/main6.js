//* Destructuring Arrays

const myFrineds = ['Ahmed', 'Khaled', 'Mosa', 'Abdullah']

// console.log(myFrineds[1]); // normal way

const [a, k, m, b] = myFrineds

console.log(a, k, m, b);

//* Nested Arrays
const myFrineds1 = ['Ahmed', 'Khaled', 'Mosa', 'Abdullah', ['Rami', 'Aziz', ['Zain', 'Hassan']]];

const [a1, , , , [b1, ,[,c1]]] = myFrineds1
console.log(a1, b1, c1);



//* Swap values

let book = "Video";
let video = "Book";

[book, video] = [video, book];

console.log(book);
console.log(video);


/*
    Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

// same key names 
const {theName, theAge, theCountry} = user;

console.log(theName, theAge, theCountry)

// change the variable names
const {theName: name, theAge: g, theCountry: cn, skills: {html: ht, css}} = user;
console.log(name, g, cn, ht, css);

const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);


/*
    Destructuring
  - Destructuring Function Parameters
*/

const user1 = {
    name: 'Mosa', 
    age: 26,
    title: 'Student',
    skills: {
        rust: 50, 
        php: 90
    }
}

function getUser({name: n, age: a, skills: {rust: r, php}}){
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your Rust Skill Progress Is ${r}`);
}

getUser(user1)


//* Challenge

let chosen = 3;

let friends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];
function getPerson(person, chosen) {
    const [person1, person2, person3] = person
    if(chosen === 1){
        let  {title, age, available, skills: [,skillTwo]} = person1
        console.log(title, age, available ? "Available" : "Not Available", skillTwo)
    }else if(chosen === 2){
        let  {title, age, available, skills: [,skillTwo]} = person2
        console.log(title, age, available ? "Available" : "Not Available", skillTwo)
    }else if(chosen === 3){
        let  {title, age, available, skills: [,skillTwo]} = person3
        console.log(title, age, available ? "Available" : "Not Available", skillTwo)
    }else {
        console.log("This person is Not here!")
    }
}

getPerson(friends, chosen)
// let [
//     {title: aTitle, age: aage, available: aavailable, skills: [sk1, sk2]}, ,
//     {title: bTitle, age: bage, available: bavailable, skills: [sk]}] = friends
// console.log(aTitle, aage, aavailable, hh1)
// console.log(bTitle, bage, bavailable, hh2)

// Some practice on Objects
const myObj = new Object
myObj.name = 'Rami'
// console.log(myObj)

let obj1 = {
    prop1: 1,
    methd: function() {
        return this.prop1
    }
}

let obj2 = {
    prop2: 2,
    methd: function() {
        return this.prop2
    }
}

let targetObject = {
    prop1: 5,
    prop3: 3
}

let finalObject = Object.assign({}, targetObject)

console.log(targetObject)
console.log(finalObject)
console.log(finalObject === targetObject)


// من برا الدرس قناة ديكود
const student = {
    firstName: 'janaka',
    lastName: 'siriwardena',
    age: 28,
    location: 'sri lanka',
    email: 'j.siri@totalinternet.com',
    discordUsername: 'JS1'
}  

const studentKeys = Object.keys(student)
const studentValues = Object.values(student)
const entries = Object.entries(student)

// الطريقة القديمة 
for (const key in student) {
    if(student.hasOwnProperty(key)){
        console.log(student[key]);
    }
}

for (const [key, value] of entries) {
    console.log(`${key} => ${value}`)
}

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(myArray);

console.log(Array.from(mySet));

// console.log([...new Set(myArray)]); // Future

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));



/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
*/
let myArr = [10, 20, 30, 40, 50, "A", "B"]

// myArr.copyWithin(3)
// myArr.copyWithin(4, 6)
// myArr.copyWithin(2, -2)
myArr.copyWithin(1, -2,-1)

console.log(myArr)


/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let check = nums.some(function (e) {
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(check);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20));
console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // console.log(this.min);
  // console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers);

let check1 = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(check1);