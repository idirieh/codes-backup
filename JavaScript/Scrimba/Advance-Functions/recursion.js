//* Basic Recursion Example

function countdown(count) {
    console.log(count)
    if (count <= 0) {
        return count
    }
    countdown(count - 1)
}

countdown(5)



function countUp(start, end) {
    console.log(start)
    if(start == end){
        return start
    }
    countUp(start + 1, end)
/*
Challenge:
1. Create a counter which counts up from a 
   provided start number to a provided end 
   number. It should log each number in turn.
*/	
}
countUp(2, 6)



// محاولتي لجمع الأعداد باسخدام الريكيرشن
function sumAll(num, total){
    // total += num;
    console.log(num)
    console.log('total', total)
    if(num == 0){
        return total
    }
    sumAll(num - 1, total += num)
}

console.log(sumAll(3, 0))

// الطريقية الصحيحة
function sumToN(n) {
    if (n <= 0) {
        return 0 
    } else {
        return n + sumToN(n -1)
    }
}

console.log(sumToN(5))
// This how call stak work under the hood
// 5 + sumToN(4) = 15
// 4 + sumToN(3) = 10
// 3 + sumToN(2) = 6
// 2 + sumToN(1) = 3
// 1 + sumToN(0) = 1


let str = 'SCRIMBA'

function reverseStr(str) {
    if(str.length == 0){
        return str
    }

/*
Challenge:
    1. Write logic for a recursive function 
       that reverses a string.
    🛟 hint.md for help!

    1. Remember to include a base case.
    2. Each recursive function call should move you just one step closer to the problem's solution.
    3. The slice() method will likely be useful here.
*/
}

console.log(reverseStr(str)) //'ABMIRCS'





// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2);
// console.log(fruits)
// console.log(citrus)

let str1 = 'SCRIMBA';
console.log(str1.slice(0, -2))
console.log(str1.slice(2))



//deep
function reverseStr(str) {
    // Base case: if the string is empty or has one character, return it
    console.log(str)
    if (str.length <= 1) {
        return str;
    }
    // Recursive case: take the last character and prepend it to the reversed rest of the string
    return str.slice(-1) + reverseStr(str.slice(0, -1));
}

console.log(reverseStr('SCRIMBA')); // 'ABMIRCS'

// reverseStr('SCRIMBA')
// reverseStr('SCRIMB')
// reverseStr('SCRIM')
// reverseStr('SCRI')
// reverseStr('SCR')
// reverseStr('SC')
// reverseStr('SC')
// reverseStr('S')
// reverseStr('')


// Scrimba Solution
function reverseStr(str) {
    if (str.length === 0) {
        return str
    } else {
        return reverseStr(str.slice(1)) + str.slice(0, 1)
    }
}



//* Eloquentjavascript
/*
Consider this puzzle: by starting from the number 1 and repeatedly either adding 5 or multiplying by 3, an infinite set of numbers can be produced. How would you write a function that, given a number, tries to find a sequence of such additions and multiplications that produces that number? For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.

Here is a recursive solution:
*/
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ??
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

//* Eloquentjavascript | Functions Exercises

function min(num1, num2){
    // if(num1 < num2){
    //     return num1
    // }else if(num2 < num1){
    //     return num2
    // }
    return num1 < num2 ?  num1 : num2 
}

console.log(min(0, -10))


const isEven = num => num % 2 == 0;


/*
We need to create a function isEven that checks if a positive whole number is even using recursion (a function that calls itself). The rules are:
Zero is even → isEven(0) returns true
One is odd → isEven(1) returns false
*/
function isEven(num){
    if(num === 1){
        return false
    }else if(num === 0){
        return true
    }else {
        return isEven(num - 2)
    }
}

function isEven(num){
    if(num === 1) return false;
    if(num === 0) return true;

    if (num < 0) {
        return isEven(num + 2) // Handle negative numbers
    }else {
        return isEven(num - 2)
    }
}
console.log(isEven(-10))



