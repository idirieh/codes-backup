const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < winConditions.length; i++) {
  const condition = winConditions[i];
  const cellA = condition[0];
  const cellB = condition[1];
  const cellC = condition[2];
  console.log(cellA, cellB, cellC);
}
