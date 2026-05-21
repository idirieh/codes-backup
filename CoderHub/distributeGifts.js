function distributeGifts(familySizes, totalGifts) {
  let result = [];
  for (let i = 0; i < familySizes.length; i++) {
    let gift = totalGifts[i] / familySizes[i];
    result.push(gift);
  }
  return result;
}

familySizes = [4];
totalGifts = [20];

console.log(distributeGifts(familySizes, totalGifts));
