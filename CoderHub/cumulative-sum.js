function cumulative_sum(arr) {
  let sum = 0;
  const totalArr = [];
  for (const n of arr) {
    totalArr.push((sum += n));
  }
  return totalArr;
}

arr = [2, 4, 5];
arr = [0, 0, 0];
console.log(cumulative_sum(arr));
