/** 
 * 
وصف التحدي
الوصف:
خلال شهر رمضان المبارك، يمتنع المسلمون عن تناول الطعام والشراب من طلوع الفجر وحتى غروب الشمس. في هذا التحدي، ستُكتب دالة تُحسب إجمالي ساعات الصيام عبر عدة أيام.
يُعطى لك مصفوفتان من السلاسل النصية:

startTimes: تمثل أوقات بدء الصيام (وقت السحور) بصيغة "HH:MM" بنظام 24 ساعة.

endTimes: تمثل أوقات انتهاء الصيام (وقت الإفطار) بنفس الصيغة.

يجب على الدالة حساب الفرق بالساعة (كناتج عشري) لكل يوم ثم جمع هذه الفروق للحصول على إجمالي ساعات الصيام.
على سبيل المثال، إذا كان يومًا واحدًا يبدأ الصيام عند "04:30" وينتهي عند "18:30"، فإن الفرق هو 14 ساعة. وإذا كانت لديك مصفوفتان تحتويان على توقيتات يومية متعددة، تقوم الدالة بجمع كل الفروق معًا لتُعيد الناتج الإجمالي.

مثال توضيحي:
المدخلات:

startTimes: ["04:30", "05:00"]

endTimes: ["18:30", "18:00"]

الحساب:

اليوم الأول: من 04:30 إلى 18:30 → 14 ساعة.

اليوم الثاني: من 05:00 إلى 18:00 → 13 ساعة.

الناتج:
14 + 13 = 27 ساعة.840

بهذا الشكل، تساعدك هذه الدالة على حساب مجموع ساعات الصيام بسهولة ويسر خلال أيام رمضان.
مثال الأول:
startTimes = ['04:30']
endTimes = ['18:30']
14
مثال الثاني:
startTimes = ['05:00']
endTimes = ['18:00']
13
مثال الثالث:
startTimes = ['04:45']
endTimes = ['18:15']
13.5
مثال الرابع:
startTimes = ['04:30', '05:00']
endTimes = ['18:30', '18:00']
27
**/

function calculateTotalFastingTime(startTimesArr, endTimesArr) {
    // write your code here
    let startNewArr = []
    let endNewArr = []
    startTimesArr.forEach((n) => {
        const [h1, m1] = n.split(':').map(Number);
        const totalMinutes1 = h1 * 60 + m1;
        startNewArr.push(totalMinutes1)
    })
    endTimesArr.forEach((n) => {
        const [h2, m2] = n.split(':').map(Number);  
        const totalMinutes2 = h2 * 60 + m2;
        endNewArr.push(totalMinutes2)
    })

    let diffrent = (endNewArr.reduce((a,n) => a+n) - startNewArr.reduce((a,n) => a+n)) / 60
    return diffrent;
}

startTimes = ['04:30', '05:00']
endTimes = ['18:30', '18:00']

console.log(calculateTotalFastingTime(startTimes, endTimes))



function calculateTotalFastingTime(startTimesArr, endTimesArr) {
    const toMinutes = time => {
        const [h, m] = time.split(':').map(Number);
        return h * 60 + m;
    };

    const totalStart = startTimesArr.reduce((sum, time) => sum + toMinutes(time), 0);
    const totalEnd = endTimesArr.reduce((sum, time) => sum + toMinutes(time), 0);

    return (totalEnd - totalStart) / 60;
}

const startTimes = ['04:30', '05:00'];
const endTimes = ['18:30', '18:00'];

console.log(calculateTotalFastingTime(startTimes, endTimes)); // Output: 27

























function timeStringToMinutes(timeArr) {
    let totalMin = 0
    timeArr.forEach(timeStr => {
        const [hours, minutes] = timeStr.split(':').map(Number);
        // console.log('H:', hours, 'M:', minutes)
        totalMin = hours * 60 + minutes
    });
    
    return totalMin;
}

console.log(timeStringToMinutes(endTimes))


const numbers = '5,10,15'

function count(numberStr) {
    let [n1, n2, n3] = numberStr.split(",").map(Number)
    let numbers = n1 + n2 + n3
    console.log(numbers)
}


count(numbers)




class Person {
    constructor(name, age, job){
        this.name = name
        this.age = age
        this.job = job
    }
    getDetails() {
        return `my name is ${this.name} and I'm ${this.age} old, and I have job: ${this.job}`
    }
}

const hamad = new Person('Hamad', 25, true)
console.log(hamad.getDetails())

class Man extends Person {
    constructor(name, age, job, skils){
        super(name, age, job)
        this.skils = skils
    }
    getDetails(){
        const basic = super.getDetails()
        return `${basic}, and my skils are: ${this.skils}`
    }
}


const yasser = new Man('Yasser', 19, false, ['HTML', 'CSS', 'TS'])
console.log(yasser.getDetails())


class Holiday {
    #price
    constructor(destination, price) {
        this.destination = destination
        this.#price = price
    }
}

const safari = new Holiday('Kenya', 1000)
console.log(safari)
safari.price = 200
console.log(safari)


// function name_char_length(name) {
//     // write your code here
//     return name.length
// }

// name = 'Keep smiling'
// console.log(name_char_length(name))

function name_char_length(name) {
    // write your code here
    let count = 0
    for(n of name){
        count++
    }
    return count
}
name = 'awesome'
console.log(name_char_length(name))


function convert_to_seconds(hours) {
    // write your code here
    return (hours * 60) * 60
}

hours = 9
console.log(convert_to_seconds(hours))


function isPalindrome(s) {
    // write your code here
    const currentWord = s.toLowerCase().replace(/[^a-zA-Z]/g, '')
    const reverseWord = currentWord.split('').reverse().join('')
    return currentWord == reverseWord
}

s = 'Madam'
console.log(isPalindrome(s))


const input = "Hello, World! 123";
const result = input.replace(/[^a-zA-Z]/g, '');
console.log(result); // Output: HelloWorld


function canForm(source, target) {
    // write your code here
    const sourceList = source.toLowerCase().split('')
    const targetList = target.toLowerCase().split('')
    const checking = targetList.every(function (element) {
        return sourceList.includes(element);
    });
    return checking ? 'yes' : 'no'
}

source = 'Hubcoders'
target = 'coderhub'

console.log(canForm(source, target))


const ages = [21, 17, 22, 19];
const areAdults = ages.every(age => age >= 18);

console.log(areAdults)


function repetitions(s) {
    let maxCount = 0;
    let count = 1;  // Start count at 1 since the first character is part of a sequence.
    
    // Loop through the string from the second character onwards
    for (let i = 1; i < s.length; i++) {
        // Check if the current character is the same as the previous one
        console.log('this is minus '+ s[i - 1])
        if (s[i] === s[i - 1]) {
            console.log(s[i])
            // console.log('this is minus '+ s[i - 1])
            count++;  // Increment the count for consecutive characters
        } else {
            // If the sequence ends, check if it's the longest sequence
            if (count > maxCount) {
                maxCount = count;
            }
            count = 1;  // Reset count for the new character
        }
    }
    
    // Final check in case the longest sequence is at the end of the string
    if (count > maxCount) {
        maxCount = count;
    }
    
    return maxCount;
}

let s = 'MZSDDDD';
console.log(repetitions(s));  // Output: 3 (for 'MMM')





const array = ['A','B','C','D','E','C','D','E','C','D','E', 'D'];

const countMap = {};

array.forEach(item => {
  countMap[item] = (countMap[item] || 0) + 1;
});

console.log(countMap); 
console.log(Object.values(countMap)); 
const myVal = Object.values(countMap)


console.log(Math.max(...myVal))



function Decimal_places(num) {
    // write your code here
    if (num.includes('.')) {
        return num.split('.')[1].length;
    }
    return 0;
}

num = '200'

console.log(Decimal_places(num))

function isEvenOrOdd(num) {
    // write your code here
    // if(num % 2 == 0) {
    //     return 'even'
    // }else {
    //     return 'odd'
    // }
    return num % 2 == 0 ? 'even' : 'odd'
}

num = 6

console.log(isEvenOrOdd(num))


function distributeGifts(familySizes, totalGifts) {
    // write your code here
    // const resultList = []
    // for(let i = 0; i < familySizes.length; i++){
    //     let gifts = totalGifts[i] / familySizes[i]
    //     resultList.push(gifts)
    // }
    // return resultList
    // return familySizes.map((size, i) => totalGifts[i] / size);
    //  return familySizes.map((size, i) => size / totalGifts[i]);
    const resultList = []
    familySizes.forEach((size, index) => {
        let result = totalGifts[index] / size;
        resultList.push(result)

    })
    return resultList
    // return familySizes.map((size, index) => Math.floor(totalGifts[index] / size));
}

console.log(distributeGifts([4, 5], [20, 25])); // [5, 5]
console.log(distributeGifts([5], [25]));       // [5]
console.log(distributeGifts([2, 3], [8, 9]));  // [4, 3]


const myNum = ["hi", "Hello", 3];

for(i of myNum) {
    console.log(i) // array items
}

for(i in myNum) { 
    console.log(i) // array index
}