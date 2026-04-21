// let randomNum = Math.floor().random() * 100

// console.log(randomNum)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Random integer between 1 and 10

setInterval(() => {
console.log(getRandomInt(1, 10));
}, 500);

