// function isPalindrome(s) {
//   const text = s.replace(/[^\p{L}]+/gu, "").toLowerCase();
//   const reversed = text.split("").reverse().join("").toLowerCase();
//   return text == reversed;
// }

function isPalindrome(s) {
  //   alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  //   myWord.forEach((l) => {
  //   if (alphabet.includes(l)) {
  //       text.push(l);
  //   }
  //   });
  //   myWord = s.toLowerCase().split("");
  const text = s
    .replace(/[^\p{L}]+/gu, "")
    .toLowerCase()
    .split("");
  const reversed = [...text].reverse();
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== reversed[i]) return false;
  }
  return true;
}
//* Correct Answer
function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleaned = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversed = cleaned.split("").reverse().join("");

  // Compare original and reversed
  return cleaned === reversed;
}

s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));

// alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
// reversed = [...alphabet];

// console.log(alphabet);
// console.log(reversed);
// console.log(alphabet.join("") == reversed.join(""));
