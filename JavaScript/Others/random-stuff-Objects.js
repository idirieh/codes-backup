function loopThroughObject(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Call the callback with the current key and value
      // callback(key, obj[key]);
      if(obj[key] == 7){
        console.log("Yes we found the ID: ", obj[key])
        console.log("The full details : ", obj.name)
      }
      // If the value is an object and not null, recurse
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        loopThroughObject(obj[key]);
      }
    }
  }
}

// Example usage:
const myObject = {
  headquarters: {
    finance: {
      employees: [
        { id: 1, name: "Amina Al-Farsi", position: "Accountant" },
        { id: 2, name: "Hiroshi Tanaka", position: "Financial Analyst" },
      ],
      budget: 500000
    },
    hr: {
      employees: [
        { id: 3, name: "Miguel García", position: "HR Manager" },
        { id: 4, name: "Priya Patel", position: "Recruiter" }
      ],
      policies: ["policy1", "policy2"]
    }
  },
  regional_offices: {
    office1: {
      sales: {
        employees: [
          { id: 5, name: "Kwame Mensah", position: "Sales Executive" }
        ],
        revenue: 1000000
      },
      support: {
        employees: [
          { id: 6, name: "Li Wei Chen", position: "Support Specialist" }
        ],
        tickets: 300
      }
    },
    office2: {
      development: {
        employees: [
          { id: 7, name: "Emily Smith", position: "Software Engineer" },
          { id: 8, name: "Hank Grey", position: "Product Manager" }
        ],
        projects: ["Project A", "Project B"]
      }
    }
  }
};

loopThroughObject(myObject, (key, value) => {
  console.log(`Key: ${key}, Value: ${value}`);
});



// // Example usage:
// const organizationData = {
//   headquarters: {
//     finance: {
//       employees: [
//         { id: 1, name: "Amina Al-Farsi", position: "Accountant" },
//         { id: 2, name: "Hiroshi Tanaka", position: "Financial Analyst" },
//       ],
//       budget: 500000
//     },
//     hr: {
//       employees: [
//         { id: 3, name: "Miguel García", position: "HR Manager" },
//         { id: 4, name: "Priya Patel", position: "Recruiter" }
//       ],
//       policies: ["policy1", "policy2"]
//     }
//   },
//   regional_offices: {
//     office1: {
//       sales: {
//         employees: [
//           { id: 5, name: "Kwame Mensah", position: "Sales Executive" }
//         ],
//         revenue: 1000000
//       },
//       support: {
//         employees: [
//           { id: 6, name: "Li Wei Chen", position: "Support Specialist" }
//         ],
//         tickets: 300
//       }
//     },
//     office2: {
//       development: {
//         employees: [
//           { id: 7, name: "Emily Smith", position: "Software Engineer" },
//           { id: 8, name: "Hank Grey", position: "Product Manager" }
//         ],
//         projects: ["Project A", "Project B"]
//       }
//     }
//   }
// }

// loopThroughObject(organizationData, 7);







// loopThroughObject(organizationData, 7);


// function searchInsideObj(obj){
//     let myObjectArray = Object.entries(obj)
//     for(myObject of myObjectArray){
//         myObjectArray1 = Object.entries(myObject)
//         for(myObject1 of myObjectArray1){
//             // console.log("This is My OJB: ", myObject1)
//             myObjectArray2 = Object.entries(myObject1)
//             for(myObject2 of myObjectArray2){
//                 console.log("This is My OJB2: ", myObject2)
//             }
//         }
// }}



console.log(searchInsideObj(organizationData))

console.log(organizationData[1])

// console.log(organizationData.regional_offices.office1.sales.employees[0].id)

function simpleRecursive(n){
    if(n == 0){
        return n
    }
    return n + simpleRecursive(n - 1)
}

// console.log(simpleRecursive(5))
/*
5 + simpleRecursive(4) 15
4 + simpleRecursive(3) 10
3 + simpleRecursive(2) 6
2 + simpleRecursive(1) 3
1 + simpleRecursive(0) 1


*/

// let num = 0;
// while(num < organizationData.le)







// const company = {
//     hanwha: {
//         id: 1,
//         name: "Ahmed",
//         age: 21,
//     },
//     hadi: {
//         id: 2,
//         name: "Nasser",
//         age: 41,
//     },

// }

// console.log(company.hadi.id)

function searchEmployeeById(obj, id) {
/*
Challenge:
1. Write a function that searches for an employee in 'organizationData'. The function should recursively traverse the nested objects and find all employees with a specified ID. 

Stretch Goal:
💪 Complete the challenge without declaring any letiable in the global scope.
*/

    return obj[id]

}

// console.log(searchEmployeeById(company))

// const employee = searchEmployeeById(organizationData, 5) // pass in data and employee id.

// console.log(employee) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]


// let objects = [
//   {
//     "foo" : "bar",
//     "bar" : "sit"
//   },
//   {
//     "foo" : "lorem",
//     "bar" : "ipsum"
//   },
//   {
//     "foo" : "dolor",
//     "bar" : "amet"
//   }
// ];

// let results = [];

// let toSearch = "lo";

// for(let i=0; i<objects.length; i++) {
//   for(key in objects[i]) {
//     if(objects[i][key].indexOf(toSearch)!=-1) {
//       results.push(objects[i]);
//     }
//   }
// }


const users = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Charlie" }
];

// Find the first object where name is "Bob"
const foundUser = users.find(user => user.name === "Bob");
if (foundUser) {
  console.log("Found user:", foundUser);
}

// Filter all objects where id is greater than 1
const filteredUsers = users.filter(user => user.id > 1);
console.log("Filtered users:", filteredUsers);


const invoicesUSDArr = [201, 354, 26, 1299, 1400, 60, 76]

// .find() returns the value of the first item that passes the test.
const invoiceOver1k = invoicesUSDArr.find(function(invoice) {
    return invoice > 1000
})

console.log(invoiceOver1k)
/**************************************************** */

const myObject1 = {
  name: "Alice",
  age: 30,
  city: "New York"
};

const searchValue = "New York";

// Using for...in loop
for (const key in myObject) {
  if (myObject[key] === searchValue) {
    console.log(`Found value "${searchValue}" with key: ${key}`);
    break; // Stop after finding the first match
  }
}

// Using Object.keys() and Array.prototype.some()
const found = Object.keys(myObject).some(key => myObject[key] === searchValue);
if (found) {
  console.log(`Value "${searchValue}" exists in the object.`);
}






let objects = [
  {
    "foo" : "bar",
    "bar" : "sit"
  },
  {
    "foo" : "lorem",
    "bar" : "ipsum"
  },
  {
    "foo" : "dolor",
    "bar" : "amet"
  }
];

let results = [];

let toSearch = "ipsu";

for(let i=0; i<objects.length; i++) {
  for(key in objects[i]) {
    console.log(objects[i][key])
    if(objects[i][key] == toSearch) {
      results.push(objects[i][key]);
    }
  }
  
}




// const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
// const chunkSize = 2;
// const chunkedArray = [];

// for (let i = 0; i < originalArray.length; i += chunkSize) {
// chunkedArray.push(originalArray.slice(i, i + chunkSize));
// }
// // chunkedArray will be [[{ id: 1 }, { id: 2 }], [{ id: 3 }, { id: 4 }], [{ id: 5 }, { id: 6 }]]

// const originalArray = [{ category: 'A', value: 1 }, { category: 'B', value: 2 }, { category: 'A', value: 3 }];
// const groupedByCategory = originalArray.reduce((acc, obj) => {
// (acc[obj.category] = acc[obj.category] || []).push(obj);
// return acc;
// }, {});
// // groupedByCategory will be { A: [{ category: 'A', value: 1 }, { category: 'A', value: 3 }], B: [{ category: 'B', value: 2 }] }


for(const key in myObject){
    console.log(key)
    if(typeof myObject[key] == 'object'){
        for (const item in myObject[key]) {
            console.log('Item ', item)
        }
        console.log('Yess ', key)
    }
}

  for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
          const element = object[key];
          
      }
  }