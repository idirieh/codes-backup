const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway')

const formatDate = (date) => {
  date.setDate(date.getDate() + 10);
  date.setHours(11, 30, 0, 0)
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  let formattedDate = date.toLocaleDateString('en-GB', options);

  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12; // Convert to 12-hour format
  minutes = minutes.toString().padStart(2, '0');

  return `${formattedDate} ${hours}:${minutes}${ampm}`;
};

let formattedDate = formatDate(new Date());
let newDate = new Date();
let fakeDate = new Date();
fakeDate.setDate(fakeDate.getDate() + 2)
console.log("fakeDate", fakeDate)
console.log("newDate", newDate)
let theDifferent = fakeDate - newDate
console.log(theDifferent)
giveaway.innerHTML = `giveaway ends on ${formattedDate}`



// let today = new Date();
// let days = 10;
// let hour = 11;
// let minute = 30;
// console.log(hour - today.getHours())
// console.log(minute - today.getMinutes()-1)
// console.log(today.getSeconds())


// let seconds = 60;

// function startCountdown() {
//     const interval = setInterval(() => {
//         console.log(seconds); // Display the current second
//         seconds--; // Decrement the seconds

//         if (seconds < 0) {
//             seconds = 60; // Reset to 60 when it reaches 0
//         }
//     }, 1000); // Run every 1000ms (1 second)
// }

// // Start the countdown
// startCountdown();



