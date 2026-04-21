// function myRandomNumber (min, max) {

//     return Math.floor(Math.random() * (max - min))
// }

// console.log(myRandomNumber(5, 10));

// function checkSign(num) {
//     return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
//   }

//   console.log(checkSign(5))

// function checkScope(){
//     "use strict";
//     let i = "function scope";
//     if(true){
//       let i = "block scope";
//       console.log(i)
//     }
//     console.log(i)
//     return i
//   }

//   checkScope()

// function freezeObj() {
//     "use strict";
//     const MATH_CONSTANT = {
//       PI: 3.14,
//     };

//     Object.freeze(MATH_CONSTANT)

//     try {
//       MATH_CONSTANT.PI = 99;
//     } catch (ex) {
//       console.log(ex);
//     }
//     return MATH_CONSTANT.PI;
//   }

//   console.log(freezeObj())

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

(function () {
  arr2 = [...arr1];
  arr1[0] = "potato";
})();
console.log(arr2);
