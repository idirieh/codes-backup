// let today = new Date
// let dateFormated = today.toLocaleString('en-US')
// console.log(today)
// console.log(dateFormated)

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
  
  console.log(formatDate(new Date()));






// Create a new Date object for today
const today = new Date();

// Add 10 days to today's date
today.setDate(today.getDate() + 10);

// Set the time to 11:30 AM
today.setHours(11, 30, 0, 0); // Hours, Minutes, Seconds, Milliseconds

// Options for formatting the date
const options = { 
  weekday: 'long', // Full weekday name (e.g., Wednesday)
  day: 'numeric',   // Day of the month (e.g., 2)
  month: 'long',    // Full month name (e.g., April)
  year: 'numeric',  // Full year (e.g., 2025)
  hour: 'numeric',  // Hour (e.g., 11)
  minute: '2-digit', // Minute (e.g., 30)
  hour12: true,     // Use 12-hour format (e.g., am/pm)
  //Remove timeZoneName, and change the separator to be only space, comma and am/pm
};

// Format the date and time
const formattedDate = today.toLocaleString('en-US', options);
console.log(formattedDate)
//replace the space between the day and month with only space.
const finalDate = formattedDate.replace(/, /g, ' ');

console.log(finalDate);






// // Create a new Date object for today
// const today = new Date();

// // Add 10 days to today's date
// today.setDate(today.getDate() + 10);

// // Set the time to 11:30 AM
// today.setHours(11, 30, 0, 0); // Hours, Minutes, Seconds, Milliseconds

// // Options for formatting the date
// const options = { 
//   weekday: 'long', // Full weekday name (e.g., Wednesday)
//   day: 'numeric',   // Day of the month (e.g., 2)
//   month: 'long',    // Full month name (e.g., April)
//   year: 'numeric',  // Full year (e.g., 2025)
//   hour: 'numeric',  // Hour (e.g., 11)
//   minute: '2-digit', // Minute (e.g., 30)
//   hour12: true,     // Use 12-hour format (e.g., am/pm)
//   //Remove timeZoneName, and change the separator to be only space, comma and am/pm
// };

// // Format the date and time
// const formattedDate = today.toLocaleString('en-US', options);

// //replace the space between the day and month with only space.
// const finalDate = formattedDate.replace(/, /g, ' ');

// console.log(finalDate);

// const today = new Date();

// // Add 10 days to today's date
// today.setDate(today.getDate() + 10);

// // Set the time to 11:30 AM
// today.setHours(11, 30, 0, 0); // Hours, Minutes, Seconds, Milliseconds

// // Options for formatting the date
// const options = { 
//   weekday: 'long', // Full weekday name (e.g., Wednesday)
//   day: 'numeric',  // Day of the month (e.g., 2)
//   month: 'long',   // Full month name (e.g., April)
//   year: 'numeric', // Full year (e.g., 2025)
//   hour: 'numeric', // Hour (e.g., 11)
//   minute: '2-digit', // Minute (e.g., 30)
//   hour12: true     // Use 12-hour format (e.g., am/pm)
// };

// // Format the date and time
// const formattedDate = today.toLocaleString('en-GB', options);

// console.log(formattedDate);

  