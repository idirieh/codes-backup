Your bug happens because you always call `changePlayer()` even after someone wins.

Right now the flow is:

```js id="s2d8dy"
updateCell();
checkWinner();
changePlayer();
```

So if `"X"` wins:

1. `checkWinner()` correctly sets:

   ```js
   Player X Wins!
   ```

2. Then `changePlayer()` runs immediately after
3. `currentPlayer` becomes `"O"`
4. Status text changes to:

   ```js
   Player O's turn
   ```

---

# Fix

Make `checkWinner()` return whether the game ended.

Then only change player if the game continues.

Replace your `cellClicked()` with this:

```js id="b5ifed"
function cellClicked() {
  const cellIndex = this.getAttribute("data-index");

  if (options[cellIndex] != "" || !running) {
    return;
  }

  updateCell(this, cellIndex);

  const gameEnded = checkWinner();

  if (!gameEnded) {
    changePlayer();
  }
}
```

Then modify `checkWinner()`:

```js id="s1rbja"
function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];

    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }

    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    running = false;
    statusText.textContent = `Player ${currentPlayer} Wins!`;
    return true;
  }

  if (!options.includes("")) {
    statusText.textContent = `Draw!`;
    running = false;
    return true;
  }

  return false;
}
```

---

# Other improvements

## 1. Use `===` instead of `==`

In JavaScript, strict equality is safer.

Change:

```js id="4r9fnr"
currentPlayer == "X";
```

to:

```js id="ksnq6y"
currentPlayer === "X";
```

Also:

```js id="m5d9sx"
if (options[cellIndex] != "")
```

becomes:

```js id="b27sm7"
if (options[cellIndex] !== "")
```

---

## 2. Fix typo: `initilizeGame`

Rename:

```js id="9ag72g"
initilizeGame();
```

to:

```js id="s48cdz"
initializeGame();
```

---

## 3. Cleaner array reset

Instead of:

```js id="9q8qdn"
options = ["", "", "", "", "", "", "", "", ""];
```

you can do:

```js id="48n8w6"
options = Array(9).fill("");
```

---

## 4. Simpler winner loop (optional)

You can use destructuring:

```js id="0x6lm8"
for (const condition of winConditions) {
  const [a, b, c] = condition;

  if (options[a] && options[a] === options[b] && options[a] === options[c]) {
    roundWon = true;
    break;
  }
}
```

This is shorter and easier to read.

---

# Overall

Your structure is good:

- Separate functions
- Proper game state
- Good use of arrays
- Good event handling

This is already a solid beginner/intermediate implementation.
