// const university = {
//   name: "TechVille University",
//   founded: 1965,
//   isPublic: true,
//   campuses: [
//     {
//       name: "Main Campus",
//       location: {
//         city: "TechVille",
//         state: "CA",
//         coordinates: { lat: 36.7783, long: -119.4179 }
//       },
//       departments: [
//         {
//           name: "Computer Science",
//           head: "Dr. Alan Turing",
//           courses: [
//             {
//               code: "CS101",
//               title: "Introduction to Programming",
//               credits: 3,
//               enrolledStudents: [
//                 { id: 1001, name: "Alice Johnson", year: 1 },
//                 { id: 1002, name: "Bob Smith", year: 2 }
//               ]
//             },
//             {
//               code: "CS202",
//               title: "Data Structures",
//               credits: 4,
//               enrolledStudents: [
//                 { id: 1003, name: "Charlie Brown", year: 2 },
//                 { id: 1001, name: "Alice Johnson", year: 1 }
//               ]
//             }
//           ]
//         },
//         {
//           name: "Mathematics",
//           head: "Dr. Ada Lovelace",
//           courses: [
//             {
//               code: "MATH101",
//               title: "Calculus I",
//               credits: 4,
//               enrolledStudents: [
//                 { id: 1004, name: "Diana Prince", year: 1 },
//                 { id: 1005, name: "Clark Kent", year: 2 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       name: "City Campus",
//       location: {
//         city: "MetroCity",
//         state: "CA",
//         coordinates: { lat: 34.0522, long: -118.2437 }
//       },
//       departments: [
//         {
//           name: "Business Administration",
//           head: "Dr. Peter Parker",
//           courses: [
//             {
//               code: "BUS101",
//               title: "Intro to Business",
//               credits: 3,
//               enrolledStudents: [
//                 { id: 1006, name: "Bruce Wayne", year: 1 },
//                 { id: 1007, name: "Selina Kyle", year: 3 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   library: {
//     totalBooks: 120000,
//     sections: [
//       {
//         genre: "Science",
//         availableBooks: [
//           { title: "A Brief History of Time", author: "Stephen Hawking" },
//           { title: "The Selfish Gene", author: "Richard Dawkins" }
//         ]
//       },
//       {
//         genre: "Computer Science",
//         availableBooks: [
//           { title: "Clean Code", author: "Robert C. Martin" },
//           { title: "You Don't Know JS", author: "Kyle Simpson" }
//         ]
//       }
//     ]
//   }
// };

/*
- You can practice with this object by trying tasks like:
- 
- Get the names of all campuses.
- 
- List all course codes offered in the Computer Science department.
- 
- Find all students enrolled in CS202.
- 
- Add a new department to the Main Campus.
- 
- Update a student's year by ID.
- 
- Count total number of departments across all campuses.
- 
- List all books in the Computer Science section of the library.
- 
- Search for a student by name across all departments.
*/

// function searchInsideObject(obj, word){
//     for(const key in obj){
//         console.log(`key: ${key} and val: ${obj[key]}`)
//         if(typeof obj[key] == 'object' && obj[key] !== null){
//             const result = searchInsideObject(obj, word)
//             if(result) return result
//         }
//     }
// }

// const myObject = {
//     babies:{
//         name: "Ahmed", 
//         age: 8,
//         address: {
//             country: "Saudi",
//             city: "Khboar",
//             contact: [
//                 {
//                     phone: 5555,
//                     email: "dada@gmail.com"
//                 },
//                 {
//                     laptop: "Dell",
//                     os: "Linux",
//                 }
//             ]
//         }
//     },
//     perents: {
//         name: "Ismail", 
//         age: 38,
//         address: {
//             country: "Saudi",
//             city: "Khboar"
//         }
//     }

// }

function searchEmployeeById(data, id) {
    for(const key in data){
        if(key === 'employees'){
            for(const item of data[key]){
                if(item.id === id) return item
            }
        }
        if(typeof data[key] === 'object'){
            const found = searchEmployeeById(data, id)
            if(found) return found
        }
    }
    

}



const myObject = {
    teachers:{
        name: "Sam Wallace", 
        age: 48,
        address: {
            country: "Canada",
            city: "Toronto",
            contact: 
                {
                    phone: 5555,
                    email: "swallace@gmail.com"
                }
        }
    },
    students: {
        name: "Mohammed Taj", 
        age: 18,
        address: {
            country: "Canada",
            city: "Ottoa",
            contact: 
                {
                    phone: 0,
                    email: "swallace@gmail.com"
                }
        }
    }

}


function searchInsideObject(obj, word){
    let foundWord = ''
    for(key in obj){
        // console.log(`Key: ${key} and Val: ${obj[key]}`)
        if(obj[key] === word){
            foundWord = obj[key];
            return;
        }
        if(typeof obj[key] === 'object' && obj[key] !== null){
            // const result = searchInsideObject(obj[key], word)
            // if(result !== undefined) {return result}
            return searchInsideObject(obj[key], word)
        }
    }
    return foundWord
}

const searchingWord = 5555
console.log(searchInsideObject(myObject, searchingWord));



// function loopThroughObject(obj) {
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       // Call the callback with the current key and value
//       // callback(key, obj[key]);
//       if(obj[key] == 7){
//         console.log("Yes we found the ID: ", obj[key])
//         console.log("The full details : ", obj.name)
//       }
//       // If the value is an object and not null, recurse
//       if (typeof obj[key] === 'object' && obj[key] !== null) {
//         loopThroughObject(obj[key]);
//       }
//     }
//   }
// }



function searchEmployeeById(myObj, callback) {
  for(key in myObj){
    if(myObj.hasOwnProperty(key)){
        callback(key, myObj[key])
        if(typeof myObj[key] == 'object' && myObj[key] !== null){
        searchEmployeeById(myObj[key], callback)
    }
    }
  }

}


console.log(typeof null)


searchEmployeeById(myObject, (key, value) => {
    console.log(`Key: ${key} and Value: ${value}`)
})



const myObject1 = {
    teachers: {
        name: "Rami",
        age: 41,
        address: {
            country: "Saudi Arabia",
            city: "Jeddah"        
        }
    },
        name: "Rashid",
        age: 32,
        address: {
            country: "Saudi Arabia",
            city: "Riyadh"        
    },
    students: {
        name: "ahemd",
        age: 22,
        address: {
            country: "Saudi Arabia",
            city: "Khobar"        
        }
    },
        name: "Khaled",
        age: 21,
        address: {
            country: "Saudi Arabia",
            city: "Riyadh"        
    }


}

for(const key in myObject1){
    console.log(key)
    if(typeof myObject1[key] == 'object' && myObject1[key] == "w"){
        for (const item in myObject1[key]) {
            console.log('Item ', item)
        }
        console.log('Yess ', key)
    }
}