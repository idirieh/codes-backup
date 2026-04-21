function divider(num1 , num2) {
    if (num2 == 0) {
        throw "You can't divide by Zero"
    }
    return num1 / num2;
}

// same as above by Chatgpt
// const divider = (a, b) => {
//     if (b === 0) throw new Error("Division by zero is not allowed.");
//     return a / b;
// };