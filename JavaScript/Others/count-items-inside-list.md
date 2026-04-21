# Counting Elements in a JavaScript Array

Here are several ways to count the occurrences of each element in an array:

## 1. Using `reduce()`

This is the most elegant modern JavaScript solution:

```javascript
const items = ['a', 'a', 'b', 'c', 'c', 'c'];

const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

console.log(count); // { a: 2, b: 1, c: 3 }
```

## 2. Using a `for...of` loop

```javascript
const items = ['a', 'a', 'b', 'c', 'c', 'c'];
const count = {};

for (const item of items) {
  count[item] = (count[item] || 0) + 1;
}

console.log(count); // { a: 2, b: 1, c: 3 }
```

## 3. Using `forEach()`

```javascript
const items = ['a', 'a', 'b', 'c', 'c', 'c'];
const count = {};

items.forEach(item => {
  count[item] = (count[item] || 0) + 1;
});

console.log(count); // { a: 2, b: 1, c: 3 }
```

## 4. For ES6+ environments (using logical nullish assignment)

```javascript
const items = ['a', 'a', 'b', 'c', 'c', 'c'];
const count = {};

for (const item of items) {
  count[item] ??= 0;
  count[item]++;
}

console.log(count); // { a: 2, b: 1, c: 3 }
```

## 5. If you need the output as a formatted string

```javascript
const items = ['a', 'a', 'b', 'c', 'c', 'c'];
const count = {};

items.forEach(item => {
  count[item] = (count[item] || 0) + 1;
});

const result = Object.entries(count)
  .map(([key, value]) => `'${key}' = ${value}`)
  .join(', ');

console.log(result); // 'a' = 2, 'b' = 1, 'c' = 3
```

All of these methods will produce the same result - an object (or string) showing the count of each unique element in the array. The `reduce()` method is generally considered the most "JavaScript-idiomatic" approach for this kind of operation.