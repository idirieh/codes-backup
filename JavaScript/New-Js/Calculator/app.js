const screen = document.querySelector('.result');
const ac = document.getElementById('ac');
const num = document.querySelectorAll('.num');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const dv = document.getElementById('dv');
const mult = document.getElementById('mul');
const equal = document.getElementById('equal');

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            return a / b;
        default:
            return 'Invalid operator';
    }
}

num.forEach(ele => {
    ele.addEventListener('click', () => {
        if (screen.innerText == "0") {
            screen.innerText = " "
            console.log('Yes is Zero')
        }
        screen.innerText += ele.innerText;
        
    })
});

function ArithmeticOperations() {
    window.firstNumber = Number(screen.innerText);
    window.operator = this.innerText.trim();
    screen.innerText = 0;
}

add.addEventListener('click', ArithmeticOperations);
sub.addEventListener('click', ArithmeticOperations);
dv.addEventListener('click', ArithmeticOperations);
mult.addEventListener('click', ArithmeticOperations);

equal.addEventListener('click', () => {
    let secondNumber = Number(screen.innerText);
    let result = calculate(window.firstNumber, secondNumber, window.operator);
    screen.innerText = result.toLocaleString();
})


ac.addEventListener('click', () => {
    screen.innerText = 0
})





