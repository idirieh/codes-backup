const firstNumber = document.getElementById('first-number');
const secondNumber = document.getElementById('second-number');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
    let fnum = Number(firstNumber.value);
    let snum = Number(secondNumber.value);
    try {
        let total = divider(fnum, snum);
        result.innerText = total;
    } catch (error) {
        alert('Error: '+ error)
    }
    
    
})


// const firstNumber = document.getElementById('first-number');
// const secondNumber = document.getElementById('second-number');
// const btn = document.getElementById('btn');
// const result = document.getElementById('result');


// // Event listener for the button
// btn.addEventListener('click', () => {
//     const fnum = parseFloat(firstNumber.value);
//     const snum = parseFloat(secondNumber.value);

//     if (isNaN(fnum) || isNaN(snum)) {
//         result.innerText = "Please enter valid numbers.";
//         return;
//     }

//     try {
//         const total = divider(fnum, snum);
//         result.innerText = total; // Display the result if no error occurs
//     } catch (error) {
//         result.innerText = error.message; // Show error message to the user
//         console.error(error); // Log error for debugging
//     }
// });
