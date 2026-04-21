const organizationData = {
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
}



function searchEmployeeById(data, targetId){
  for(key in data){
    if(key === 'employees'){
      for(item of data[key]){
        if(item.id === targetId){
          // result.push(item);
          return item
        }
      }
    }
    if(typeof data[key] === 'object'){
      const found = searchEmployeeById(data[key], targetId);
      if (found) return found
    }
  }
  // return result
}

/******************Scrimba******************/

function searchEmployeeById(data, targetId) {
    let results = []
    for (let key in data) {
        if (key === 'employees') {
            for (let item of data[key]) {
               if (item.id === targetId) {
                   results.push(item)
               } 
            }
        } else if (typeof data[key] === 'object') {
            results = [...results, ...searchEmployeeById(data[key], targetId)]
        }
    }
    return results
}

const employee = searchEmployeeById(organizationData, 5) // pass in data and employee id.
const employee2 = searchEmployeeById(organizationData, 6) // pass in data and employee id.

console.log('employee: ', employee)



/******************Other Ways*****************/
/*
// function searchEmployeeById(data, id) {
//   for (let key in data) {
//     if (key === "employees") {
//       for (let item of data[key]) {
//         if (item.id === id) {
//           return item;
//         }
//       }
//     } else if (typeof data[key] === 'object' && data[key] !== null) {
//       const found = searchEmployeeById(data[key], id);
//       if (found) return found;
//     }
//   }

//   return null; // not found
// }



console.log(searchEmployeeById(organizationData, 1))


// function searchEmployeeById(data, id) {
//     for(let key in data){
//         if(key == "employees"){
//             for(let item of data[key]){
//                 if (item.id === id) {
//                     result = item;
//                     return; // stop once found
//                  }
//             }
//         }else if(typeof data[key] === 'object'){
//             searchEmployeeById(data, id)
//             if (result) return; // early return if found
//         }
//     }

// }


// function searchEmployeeById(data, id) {
//   for (let key in data) {
//     if (key === "employees") {
//       for (let item of data[key]) {
//         if (item.id === id) {
//           result = item;
//           return; // stop once found
//         }
//       }
//     } else if (typeof data[key] === 'object' && data[key] !== null) {
//       searchEmployeeById(data[key], id);
//       if (result) return; // early return if found
//     }
//   }
// }

// function searchEmployeeById(data, id) {
//   for (let key in data) {    
//     if (key === "employees") {
//       for (let item of data[key]) {
//         if (item.id === id) {
//           return item;
//         }
//       }
//     } else if (typeof data[key] === 'object' && data[key] !== null) {
//       const found = searchEmployeeById(data[key], id);
//       if (found) return found;
//     }
//   }

//   return null; // not found
// }



// const employee = searchEmployeeById(organizationData, 7) // pass in data and employee id.

// console.log(employee) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]


*/

/*****************LLM*************************/

// function searchEmployeeById(obj, id) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const value = obj[key];
      
//       if (Array.isArray(value)) {
//         for (let item of value) {
//           if (item.id === id) {
//             return item; 
//           }
//         }
//       }
//       if (typeof value === 'object' && value !== null) {
//         const result = searchEmployeeById(value, id);
//         if (result) {
//           return result;
//         }
//       }
//     }
//   }
//   return null

// }


// function searchEmployeeById(obj, id) {
//   // Handle arrays: iterate and recurse on each item
//   if (Array.isArray(obj)) {
//     for (const item of obj) {
//       const result = searchEmployeeById(item, id);
//       if (result) return result;
//     }
//   }
//   // Handle non-array objects
//   else if (obj && typeof obj === 'object') {
//     // Check if current object is an employee with matching ID
//     if (obj.id === id) return obj;
    
//     // Recurse into each property value
//     for (const key in obj) {
//       if (Object.hasOwn(obj, key)) {
//         const result = searchEmployeeById(obj[key], id);
//         if (result) return result;
//       }
//     }
//   }
//   // Return null if not found
//   return null;
// }



// const employee = searchEmployeeById(organizationData, 15) // pass in data and employee id.

// console.log(employee) // Output: [{id: 5, name: "Kwame Mensah", position: "Sales Executive"}]
