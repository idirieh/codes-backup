function count_ones(num) {
  const binary = num.toString(2);
  let totalOnes = 0;
  for (const digit of binary) {
    if (digit == 1) {
      totalOnes += 1;
    }
  }

  return totalOnes;
}

num = 100;
console.log(count_ones(num));
