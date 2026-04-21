const h2 = document.createElement('h2');
h2.innerText = "Hi there";
h2.setAttribute('id', 'sub-headding');
h2.setAttribute('class', 'secondary');
h2
document.body.appendChild(h2);

// ---------------- //

document
document.querySelector('p');
document.querySelector('h1');
document.querySelector('a');
document.querySelectorAll('p');

document.getElementById('heading');
document.getElementsByClassName('txt');


// ---------------- //

const target = document.querySelector('body');
function handleClick() {
    console.log("Click the body");
}

target.addEventListener('click', handleClick)

// add this function to the html element like h1 
function handleClick1() {
    console.log("Click the handler");
}


// ---------------- //

var h1 = document.querySelector('h1');
let arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
];

function handleClicks() {
    switch(h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.innerText = arr[2];
            break;
        case arr[2]:
            h1.innerText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
};

h1.addEventListener('click', handleClicks);
