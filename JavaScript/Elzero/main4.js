// Higher Order Functions
console.log("\n********Higher Order Functions********\n");
// Map function
console.log("\n********Map Functions********\n");
let myNumbers = [1, 2, 3, 4, 5, 6];

// let addSelf = myNumbers.map(function(element) {
//     return element + element
// })

let addSelf = myNumbers.map((e) => e + e); // same as the above

console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let addSelf1 = myNumbers.map(addition); // same as the above
console.log(addSelf1);

// Example

let swappingCases = "elZERo"; // حرف كبير الى صغير والعكس
let invertedNumbers = [1, -10, -20, 15, 100, -30]; // رقم سالب الى موجب والعكس

let sw = swappingCases
  .split("")
  .map(function (e) {
    return e === e.toUpperCase() ? e.toLocaleLowerCase() : e.toUpperCase();
  })
  .join("");
console.log(sw);

let inv = invertedNumbers.map(function (e) {
  return -e;
});

// let inv = invertedNumbers.map( e => -e); //نفس الي فوق

console.log(inv);

// filter function
console.log("\n********Filter Functions********\n");

let friends = ["Mosa", "Khaked", "Mohammed", "Mahmoud", "Isalm", "Mohaned"]; // الاصدقاء التي تبدأ اسمائهم بحرف م

let filterFriedns = friends.filter(function (e) {
  return e.startsWith("M");
});
console.log(filterFriedns);

// Example for map and filter

let mix = "A13BS2Z4"; // filter string and multiply numbers

let multNums = mix
  .split("")
  .filter(function (e) {
    return !isNaN(e);
  })
  .map(function (e) {
    return e * e;
  });

let multNums1 = mix
  .split("")
  .filter((e) => !isNaN(e))
  .map((e) => e * e); // same as the above but with one line using arrow function
console.log(multNums1);

// reduce
console.log("\n********Reduce Functions********\n");
let rdNumbers = [10, 20, 30, 40];

let addAll = rdNumbers.reduce(function (acc, current) {
  return acc + current;
}, 100);
console.log(addAll);

// object
console.log("\n********Objects Functions********\n");

let myObj = new Object();
myObj.name = "Jamal";
myObj.age = 28;
myObj.sayHi = function () {
  return `Hello`;
};

console.log(myObj);
console.log(myObj.name);
console.log(myObj.sayHi());

let myDetails = {
  myName: "ISMAIL",
  myAge: 35,
  mySkills: ["HTML", "CSS", "JS"],
  myAvailabilty: false,
  myAdress: {
    jeddah: "Prince Sultan Road",
    khobar: {
      main: "Rakah Al-Janobiyah",
      branch: "Iskan Al Khobar",
    },
  },

  checkAv: function () {
    if (this.myAvailabilty === true) {
      return `Yes I'm Free`;
    } else {
      return `No I'm not Free`;
    }
  },
};

console.log(myDetails.myName);
console.log(myDetails.myAge);
console.log(myDetails.mySkills[1]);
console.log(myDetails.myAdress.khobar.branch);
console.log(myDetails["myAdress"].khobar.branch);
console.log(myDetails["myAdress"]["khobar"]["main"]);
console.log(myDetails.checkAv());
myDetails.myAvailabilty = true;
console.log(myDetails.checkAv());

console.log(this);

// creating object

let user = {
  theName: "Khaled",
  theAge: 40,
  doubleAge: function () {
    return this.theAge * 2;
  },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.doubleAge());

let copyOjb = Object.create(user);
console.log(copyOjb);

copyOjb.theAge = 30;

console.log(copyOjb.theName);
console.log(copyOjb.theAge);
console.log(copyOjb.doubleAge());

// object assign

let obj1 = {
  prop1: 1,
};

let obj2 = {
  prop2: 2,
};

let targetObj = {
  prop1: 100,
  prop2: 200,
  prop3: 3,
};

let finalObj = Object.assign(targetObj, obj1);
finalObj.prop4 = 4;
console.log(finalObj);

let newObj = Object.assign(obj1, { prop5: 5, prop6: 6 });
console.log(newObj);

// checking if obj has prop

let myObj1 = {
  gift: "car",
  pet: "cat",
  bed: "cotton",
};

function checkObj(checkProp) {
  if (myObj1.hasOwnProperty(checkProp)) {
    return myObj1[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("bed"));

// Nested Objects

let teachers = {
  math: {
    name: "Ibrahim",
    students: ["Mo", "Khalid", "nasser"],
  },
  science: {
    name: "Mosa",
    students: ["Bader", "Saleem", "Jo"],
  },
};

// Object freeze

function freezeObj() {
  "use strict";
  const MATH_CONSTANT = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANT); // it will freeze the value of the prop

  try {
    MATH_CONSTANT.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANT.PI;
}

console.log(freezeObj());

// object challenge

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

const iterate = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(`key: ${key}, value: ${obj[key]}`);

    if (typeof obj[key] === "object" && obj[key] !== null) {
      iterate(obj[key]);
    }
  });
};

iterate(recordCollection);

// for (x of recordCollection) {
//   console.log(`this is what we need: ${x}`);
// }

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if ((value = "")) {
//     delete records.prop;
//   }

//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");

let copyRecordCollection = JSON.parse(JSON.stringify(recordCollection)); // making copy of the object

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (name === contacts[i].firstName) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Sherlock", "lastName"));
