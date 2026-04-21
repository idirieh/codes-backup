
//* is not done

function string_builder(expression) {
    // write your code here
    const myList = expression.split('');
    let myLetters = []
    let result = []
    let num = 0
    for(let n of myList) {
        console.log(n)
        if(/\d/.test(n)){
            num = n
        }else if(n == '[') {
            continue
        }else if(/[a-zA-Z]/.test(n)) {
            myLetters.push(n)
        }else if(n == ']'){
            console.log('the num is ', num)
            let word = myLetters.join('').repeat(num)
            console.log(word)
            result.push(word)
            myLetters.length = 0;
            num = 0;
        }
           
    }
    result.push(myLetters.join(''))
    return result.join("")
}

let expression = 'abc3[cd]xyz'
const result = string_builder(expression)
console.log('The result is: ', result)

// let text = "Hello world!";
// let result = text.repeat(2);
// console.log(typeof result)



