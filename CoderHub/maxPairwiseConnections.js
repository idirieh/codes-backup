function maxPairwiseConnections(s) {
  if (!s) return 0;
  let countAB = 0;
  let countXY = 0;
  for (c of s) {
    if (c === "A" || c === "B") countAB++;
    else if (c === "X" || c === "Y") countXY++;
  }

  return (countAB + countXY) / 2;
}

s = "AABB";

console.log(maxPairwiseConnections(s));
