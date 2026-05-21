function maxProfit(prices) {
  if (!prices.length) return 0;
  let buyPrice = prices[0];
  let sellPrices = [];
  for (let price of prices) {
    if (price < buyPrice) {
      buyPrice = price;
    }
    sellPrices.push(price - buyPrice);
  }

  return Math.max(...sellPrices);
}

prices = [];

console.log(maxProfit(prices));

// function maxProfit(prices) {
//   if (!prices.length) return 0;
//   sellPrice = prices[0];
//   buyPrice = prices[0];
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] > sellPrice) sellPrice = prices[i];
//     if (prices[i] < buyPrice) {
//       buyPrice = prices[i];
//       sellPrice = 0;
//     }
//   }
//   return [sellPrice, buyPrice];
// }

// function maxProfit(prices) {
//   if (!prices.length) return 0;
//   sellPrice = Math.max(...prices);
//   buyPrice = Math.min(...prices);
//   let result =
//     prices.indexOf(sellPrice) > prices.indexOf(buyPrice)
//       ? sellPrice - buyPrice
//       : "no";

//   return `The Buy P is: ${prices.indexOf(sellPrice)} and the Sell P is ${prices.indexOf(buyPrice)} so the Profit is ${result}`;
// }

// console.log(maxProfit(prices));

// function minNumber(arr) {
//   let smallest = 0;
//   if (!arr.length) return 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (smallest == null || arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   if (!arr.length) return 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// pri = [7, 1, 5, 3, 6, 4];
// console.log(minNumber(pri));

//* تطوير الحل الصحيح
function maxProfit(prices) {
  if (!prices.length) return 0;
  let buyPrice = prices[0];
  let sellPrice = 0;
  for (let price of prices) {
    if (price < buyPrice) {
      buyPrice = price;
    }
  }

  return sellPrice;
}

prices = [];

console.log(maxProfit(prices));
