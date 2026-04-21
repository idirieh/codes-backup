//* The simplest way to count letter in string
function firstNonRepeatingLetter(s) {
    let count = {}

    for(const char of s){
        count[char] = (count[char] || 0) + 1
    }
    
    return count
}


/*
To count the occurrences of each letter in a string in JavaScript, using an Object is one of the most efficient and readable ways.

✅ Best Approach: Using an Object

Here's a simple and clean implementation:
*/

function countLetters(str) {
  const counts = {};

  for (let char of str) {
    if (char.match(/[a-z]/i)) { // Optional: only count letters
      char = char.toLowerCase(); // Normalize case if needed
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  return counts;
}

// Example usage:
const result = countLetters("Hello World!");
console.log(result);
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

//*🧠 Explanation:

char = char.toLowerCase() //– makes the count case-insensitive.

counts[char] = (counts[char] || 0) + 1 //– either initializes to 1 or increments the existing count.
/*
The match(/[a-z]/i) line ensures only letters are counted. You can remove that if you want to count all characters, including punctuation and spaces.

🔁 Alternative: Using Map

If you prefer Map for consistent ordering or if keys might not always be strings, you can do:
*/
function countLetters(str) {
  const counts = new Map();

  for (let char of str.toLowerCase()) {
    if (char.match(/[a-z]/)) {
      counts.set(char, (counts.get(char) || 0) + 1);
    }
  }

  return counts;
}

//* myway

function countLetters(s) {
    let lettersCount = {};
    s.split('').forEach(element => {
        if (lettersCount.hasOwnProperty(element)) {
            lettersCount[element] += 1;
        } else {
            lettersCount[element] = 1;
        }
    });
    return lettersCount;
}

console.log(countLetters('banana'));

/*
hasOwnProperty Check
This is good practice to avoid inherited properties, but since you're populating the object yourself, you can safely simplify: */

function countLetters(s) {
    let lettersCount = {}
    s.split('').forEach(element => {
        lettersCount[element] = (lettersCount[element] || 0) + 1;
    });
    return lettersCount
}

console.log(countLetters('banana'))
