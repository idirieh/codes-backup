function calculateTotalFastingTime(startTimes, endTimes) {
  function toMinutes(time) {
    [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }
  let result = 0;
  for (let i = 0; i < startTimes.length; i++) {
    result += toMinutes(endTimes[i]) - toMinutes(startTimes[i]);
  }
  return result / 60;
}

startTimes = ["04:30", "05:00"];
endTimes = ["18:30", "18:00"];

console.log(calculateTotalFastingTime(startTimes, endTimes));

// time = "04:30";
// [hours, minutes] = time.split(":").map(Number);
// console.log(hours, minutes);
