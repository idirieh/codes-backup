function greedy(num) {
  const amounts = [1, 2, 5, 10, 50, 100, 200, 500];
  let result = [];
  let count = amounts.length - 1;
  while (num > 0) {
    if (num >= amounts[count]) {
      result.push(amounts[count]);
      num -= amounts[count];
    } else {
      count--;
    }
  }
  return result;
}

console.log(greedy(2500));

// amounts = [1, 2, 5, 10, 50, 100, 200, 500];
// for (let i = amounts.length - 1; i >= 0; i--) console.log(amounts[i]);
