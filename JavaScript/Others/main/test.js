// try and catch
// console.log(a + b); (the error code)

// try{
//     console.log(a + b);
// } catch(err){
//     // console.log(err);
//     console.log('some error ')
// }
// console.log('This line to test');


// Here's a simple example of converting an everyday Base 10 number (a number of the common decimal system) to a Base 2 number (i.e binary number).
// console.log((10).toString(2));

// for(let i = 0; i <= 1000; i++){
//     console.log(i)
// }

// let students = [
//     ['Yarob', 'Ahmed', 'Khaled'], 
//     ['Omar', 'Jaber', 'Sami'], 
//     ['Salem', 'Rami']
// ]

// for (student of students){
//     for (stdName of student){
//         console.log(stdName)
//     }
// }
// console.log(typeof students)

// let myArray = [9, 1, 5, 7, 10, 'hello', true]

// function listReverce(arr){
//     let newArr = []
//     for(let i = 1; i <= arr.length; i++){
//         // newArr.push(arr[(-i)])
//         console.log(arr[(-i)])
//     }
//     // console.log(arr)
// }

// listReverce(myArray)

// let myArray = [9, 1, 5, 7, 10, 'hello', true]

// function listReverce(arr){
//     let newArr = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         newArr.push(arr[i])
//     }
//     console.log(newArr)
// }

// listReverce(myArray)

// function test(){
//     console.log('hi')
// }

// let x = test()

// let word = 'hello world'
// // newWord = word.split(' ').length
// // console.log(newWord)

// function countWords(txt) {
//     return txt.split(' ').length;
// }

// console.log(countWords(word))

let arr = [1, 2, 3, 4]
arr.forEach(function(num){
    console.log(num +1)
})


// strCap = (str) => str.toUpperCase()
export default function strCap(str){
    return str.toUpperCase()
}

