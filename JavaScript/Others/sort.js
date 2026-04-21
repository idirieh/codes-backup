// sorting List

// my solution

let myArr = [7, 2, 20, 9, 1, 3];

//the simplest way to sort a list
let sortedArr = [...myArr].sort((a, b) => a - b) // swap a and b for ascending and descending sort
console.log(sortedArr)




function sortArray(arr){
    let smallest = null;
    let newArr = [];
    const originalLength = arr.length
    for(let i = 0; i < originalLength; i++){
        // console.log('outer: ', arr[i])
        for(let j = 0; j < arr.length; j++){
            // console.log('inner: ', arr[j])
            if(smallest == null || arr[j] < smallest){
            smallest = arr[j]
        }
        }
        // console.log('smallest: ', smallest)
        newArr.push(smallest)
        let index = arr.indexOf(smallest);
        arr.splice(index, 1);
        // console.log(arr);
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


