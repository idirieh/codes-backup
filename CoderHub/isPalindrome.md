Your solution is very close, but the issue is in this part:

```js
s.replace(/[^\p{L}]+/gu, "");
```

`\\p{L}` keeps **letters only** and removes everything else, including numbers.

Most palindrome problems (like the examples from LeetCode) require keeping **alphanumeric characters** (letters + digits).

For example:

```js
isPalindrome("0P");
```

Expected:

```js
false;
```

But your code turns it into:

```js
"P";
```

because `0` gets removed, so it incorrectly returns `true`.

You should include numbers too:

```js
function isPalindrome(s) {
  const text = s.replace(/[^\p{L}\p{N}]+/gu, "").toLowerCase();
  const reversed = text.split("").reverse().join("");
  return text === reversed;
}
```

Explanation:

- `\p{L}` → any Unicode letter
- `\p{N}` → any Unicode number
- `^` → NOT these characters
- `+` → one or more
- `gu` → global + Unicode mode

Now it works correctly for:

```js
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("0P")); // false
```
