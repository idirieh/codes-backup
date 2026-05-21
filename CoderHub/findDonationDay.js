function findDonationTargetDay(donations, target) {
  let sum = 0;
  let day = -1;
  for (let i = 0; i < donations.length; i++) {
    sum += donations[i];
    if (sum >= target) {
      day = i + 1;
      break;
    }
  }
  return day;
}

donations = [100];
target = 100;

console.log(findDonationTargetDay(donations, target));
