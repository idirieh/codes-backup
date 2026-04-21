// how to get the min from array without using MATH.min()

let myArr = [7, 15, 88, 6, 5, 13];
let min = Infinity
for (let i = 0; i < myArr.length; i++) {
  if (myArr[i] < min) {
    min = myArr[i]
  }
}
console.log(min)

// how to get max from array
let myArr1 = [7, 15, 88, 6, 5, 13];
let max = 0;
for (let i = 0; i < myArr1.length; i++) {
  if (myArr1[i] > max) {
    max = myArr1[i]
  }
}
console.log(max)
