// let grade = 75;

// if(grade > 75){
//     console.log('A')
// }else if(grade >= 75 || grade > 50){
//     console.log('B')
// }else if(grade >= 50 || grade > 25){
//     console.log('C')
// }else if(grade <= 25){
//     console.log('F')
// }else{
//     console.log('"The value of the age variable is not numerical"')
// }

// switch (grade){
//     case (grade == 75):
//         console.log('A');
//         break;
// }

// for(let i = 1; i <= 3; i++){
//     console.log(i)
// }
// console.log('Go')


// let x = 10
// while(x > 0){
//     console.log(x);
//     x--;
// }

// let i = 1;

// while(i < 5){
//     console.log(i);
// }
// console.log('Counting completed!');

// for(let i = 1; i <= 2; i++){
//     for(let j = 1; j <= 5; j++){
//         console.log('Week', i, 'day', j)
//     }
//     console.log('---')
// }


// let age = 17;

// if(age < 18){
//     console.log('Kid')
// }

// console.log(!false)


// const fruits1 = ['apples', 'pears']
// const fruits2 = [...fruits1]
// fruits1.pop()
// console.log(fruits1, "not", fruits2)

// const meal = ["soup", "steak", "ice cream"]
// let [starter] = meal;
// console.log(starter);
// let obj = {
//     key: 1,
//     value: 4
// };

// let output = { ...obj };
// output.value -= obj.key;

// console.log(output.value);


// const numbers = [9, 3, 12, 44, 1, 99, 7];
// const minNumer = Math.min(...numbers);
// console.log(minNumer);
// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

// console.log('round: ', Math.round(3.75))
// console.log('floor: ', Math.floor(3.75))
// console.log('abs: ', Math.abs(3.75))
// console.log('ceil: ', Math.ceil(3.75))

// let x = "10"
// let y = "20"
// // console.log(x+y)
// let z = x + y
// console.log(z)

const students = ['Yarob', 'Khalid', 'Mohammed', 'Omar', 'Sami']

students.splice(1, 0, 'Ismail')
console.log(students)