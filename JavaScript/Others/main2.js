// to add quotation mark
console.log('It\'s such an interesting language');
console.log('This is \"JavaScript\"');
console.log('The \\ character is called backslash.');

// array
let colors = ['red', 'green', 'blue'];
console.log(colors);

colors[1] =  'black'
console.log(colors);

console.log(colors.length);
console.log(colors.includes('red'));

colors.push('orange') // add a new item at the last of the list
console.log(colors)

colors.pop(); // remove last item in the list
console.log(colors);

let blueColor = colors.pop();
console.log(blueColor);

colors.unshift('yellow') // add a new item at the start of the list
console.log(colors);

colors.shift();
console.log(colors); // remove the first item in the list

console.log(Array.isArray(colors));

// 2D array
const values = [[1, 2, 3], true, 'JavaScript'];
console.log(values);
console.log(values[0][1]);

// split 
let message = 'Welcome to JavaScript';
let result = message.split(' ');
console.log(result);

// join
let jon = result.join(' ');
console.log(jon)

// if satement
let age = 10;
if (age < 12) {
    console.log('Sorry you are not old enogh to play this game');
}else {
    console.log('Welcome to the game');
}

// else if 
let number = 1;
if (number > 0) {
    console.log('+');
}else if (number < 0) {
    console.log('-');
}else {
    console.log('Zero');
}

// switch
const favColors = ['red', 'green', 'blue'];
let colorNumber = 6;

switch(colorNumber) {
    case 1:
        console.log(favColors[0]);
        break;
    case 2:
        console.log(favColors[1]);
        break;
    case 3:
        console.log(favColors[2]);
        break;
    case 4:
    case 5:
    case 6:
        console.log('black');
        break;
    default:
        console.log('White');
        break;
}
