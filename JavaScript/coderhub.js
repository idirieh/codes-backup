/*
قُم بكتابة دالة تستقبل عدد صحيح تقوم هذه الدالة بالعد التنازلي من ذلك العدد بثلاث أرقام وصولاً إلى الصفر
ومن ثم إرجاع مصفوفة من الأعداد الزوجية لذلك العد التنازلي مرتبة تصاعدياً
في حال كان العد التنازلي لا يحتوي على الأعداد (لأن الحد المُمر يساوي 3 أو أقل) سيتم إرجاع القيمة
*/

// function countdown(num) {
//   let evenNums = [];
//   if (num <= 3) evenNums.push(0);
//   for (let i = num; i > 0; i = i - 3) {
//     //i % 2 == 0 ? evenNums.push(i) : i;
//     if (i % 2 == 0) evenNums.unshift(i);
//   }
//   return evenNums;
// }

function countdown(num) {
  let evenNums = [];
  if (num <= 3) return [0];
  while (num >= 0) {
    num = num - 3;
    if (num > 0 && num % 2 == 0) {
      evenNums.unshift(num);
    }
  }
  return evenNums;
}

// console.log(countdown(10));
// console.log(countdown(23));
// console.log(countdown(103));
// console.log(countdown(15));
// console.log(countdown(3));

/*
قم بكتابة دالة تستقبل مصفوفة تحتوي على أسعار الأسهم اليومية.

يجب على الدالة إيجاد:

أفضل سعر للشراء
ثم أفضل سعر للبيع بعده

بحيث يكون الربح هو الأكبر ممكنًا.

ملاحظات مهمة:
لا يمكنك البيع قبل الشراء.
الربح = سعر البيع - سعر الشراء.
إذا لم توجد أي فرصة لتحقيق ربح، أرجع 0.
إذا كانت المصفوفة فارغة، أرجع 0.
*/
//TODO: Finish this code
function maxProfit(prices) {
  let highest = Math.max(...prices);
  let lowest = Math.min(...prices);
  if (!prices.length) return [];
  //   prices.forEach((price) => {
  //     if (lowest == null || price > highest) highest = price;
  //     if (lowest == null || price < lowest) {
  //       lowest = price;
  //       highest = 0;
  //     }
  //   });

  //   console.log(`highest = ${highest}, lowest = ${lowest}`);
  console.log(Math.max(...prices), Math.min(...prices));
  console.log(prices.indexOf(highest));
}

prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);

maxProfit([2, 4, 1]);
maxProfit([]);

//*********/

console.log("coderHub");

const startTime = ["04:30", "05:00"];
const endTime = ["18:30", "18:00"];
function calculateTotalFastingTime(startTimes, endTimes) {
  // write your code here
  let startSum = 0;
  let endSum = 0;

  startTime.forEach((element) => {
    startSum += +element.replaceAll(":", ".");
  });

  endTime.forEach((element) => {
    endSum += +element.replaceAll(":", ".");
  });

  totalH = endSum - startSum;
  return Math.round(totalH);
}

// calculateTotalFastingTime(startTime, endTime);
console.log(calculateTotalFastingTime(startTime, endTime));
/*ElZero */

let arr = [1, 10, 15, -2, -5, 0, "Z", "A", 8, -30, 5, "C"];

function getResult(arr) {
  arr.forEach((e) => {
    console.log(e);
  });
}

getResult(arr);
// Ouput
// [39, 3, 'ACZ']

const mStr = " Hello  ";
console.log(mStr.trim().length);

function isBango(name) {
  return name.toLowerCase()[0] == "r"
    ? `${name} you are bango`
    : `${name} you are not bango`;
}
array = ["taco", "Rome", "Yasser", "Rami", "Ahmed"];
array.forEach((n) => {
  console.log(isBango(n));
});

// for (let index = 0; index < array.length; index++) {
//   console.log(isBango(array[index]))
// }

const nums = ["5", 9, "8", "1"];

const myTotal = nums.reduce((a, n) => a + +n, 0);

console.log(myTotal);
