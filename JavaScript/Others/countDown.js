let seconds = 60;
let minutes = 10;
console.log('minutes', minutes)


function startCountdown() {
    const interval = setInterval(() => {
        console.log(seconds); // Display the current second
        seconds--; // Decrement the seconds

        if (seconds < 0) {
            seconds = 60; // Reset to 60 when it reaches 0
            minutes--;
            console.log('minutes', minutes)
        }
    }, 1000); // Run every 1000ms (1 second)
}

startCountdown()




// Create two Date objects
const today = new Date(); // Today's date and time
const tomorrow = new Date(); // Tomorrow's date and time
tomorrow.setDate(today.getDate() + 1); // Set tomorrow's date

// Subtract the two dates (result is in milliseconds)
const differenceInMilliseconds = 1234567890;

// Convert milliseconds to days, hours, minutes, and seconds
const millisecondsInADay = 1000 * 60 * 60 * 24; // Milliseconds in a day
const millisecondsInAnHour = 1000 * 60 * 60; // Milliseconds in an hour
const millisecondsInAMinute = 1000 * 60; // Milliseconds in a minute
const millisecondsInASecond = 1000; // Milliseconds in a second

// Calculate days, hours, minutes, and seconds
// const days = Math.floor(differenceInMilliseconds / millisecondsInADay);
// const hours = Math.floor((differenceInMilliseconds % millisecondsInADay) / millisecondsInAnHour);
// const minutes = Math.floor((differenceInMilliseconds % millisecondsInAnHour) / millisecondsInAMinute);
// const seconds = Math.floor((differenceInMilliseconds % millisecondsInAMinute) / millisecondsInASecond);

// Output the result
console.log(`Difference: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

for(let i = 0; i < 5; i++){
    setTimeout(() => {
        
    }, 2000);
    console.log(i);
}

let n = 5
setInterval(() => {    
    console.log(n)
    n--
    if(n < 0){
        clearInterval(this)
    }
}, 1000)

let count = 10;

const countdown = setInterval(() => {
  console.log(count);
  count--;
  
  if (count < 0) {
    clearInterval(countdown);
    console.log("Countdown complete!");
  }
}, 1000);


function countdown(n) {
    if (n < 0) {
      console.log("Countdown complete!");
      return;
    }
    
    console.log(n);
    setTimeout(() => countdown(n - 1), 1000);
  }
  
  countdown(10);