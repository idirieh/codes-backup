const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const hours = document.getElementById('hr');
const minuts = document.getElementById('min');
const seconds = document.getElementById('sec');
let num = 0;
let intervalIdSec;
let intervalIdMin; // Variable to store the interval ID

startBtn.addEventListener('click', () => {
    intervalIdSec = setInterval(() => {
        seconds.innerText = num++;
        if(num >= 60) {
            num = 0;
            minutsTimer()
        }
    }, 100);
});

function minutsTimer() {
    intervalIdMin = setInterval(() => {
        minuts.innerText = num++
    }, 1000);
}

stopBtn.addEventListener('click', () => {
    clearInterval(intervalIdSec); // Stop the seconds interval
    clearInterval(intervalIdMin); // Stop the minutes interval
});