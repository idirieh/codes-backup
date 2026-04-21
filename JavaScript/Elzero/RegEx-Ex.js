

let text = `
John D. Smith (john.smith@example.com) was born on 1984-07-23 and lives in New York. 
He recently bought a new car: Tesla Model 3, license plate NY-2048-XYZ. 
His sister, Mary-Anne O'Neill, born on 1992/11/05, moved to London. 
Her email is maryanne.oneill@subdomain.mail.co.uk and she drives a BMW with plate number UK-1199-ABC.

They both have phone numbers: John's is +1 (212) 555-0198, and Mary-Anne's is +44 20 7946 0958. 
They like reading articles from https://www.technewsworld.com and sometimes from http://news.bbc.co.uk.

Here are some random numbers: 12345, 00123, 99999, 42. Some dates in various formats: 2025-09-21, 09/21/2025, 21.09.2025.
`

console.log(text.match(/\w/g));

/*
RegEx Questions:
1. Extract all email addresses.

Expected match: john.smith@example.com, maryanne.oneill@subdomain.mail.co.uk

2. Find all phone numbers.

Expected match: +1 (212) 555-0198, +44 20 7946 0958

3. Match all full dates (in any of these formats):

YYYY-MM-DD

YYYY/MM/DD

MM/DD/YYYY

DD.MM.YYYY

Expected match:

1984-07-23

1992/11/05

2025-09-21

09/21/2025

21.09.2025

4. Find all names that start with a capital letter and contain at least a first and last name.

Expected match:

John D. Smith

Mary-Anne O'Neill

5. Extract all URLs (http/https).

Expected match:

https://www.technewsworld.com

http://news.bbc.co.uk

6. Get all license plate numbers.

Expected match:

NY-2048-XYZ

UK-1199-ABC

7. Find all 5-digit numbers (including leading zeros).

Expected match:

12345

00123

99999

✅ Bonus Challenge:

Write a RegEx that matches only the domain names from the URLs (e.g., technewsworld.com, bbc.co.uk).
*/


let text1 = `
RegExr was created by gskinner.com.

Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.

The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community and view patterns you create or favorite in My Patterns.

Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English.
`

// console.log(text1.match(/the\s+(\w+)/gi));
console.log(text1.match(/\br(\w+)/gi));

let myStr = 'lamjam'
console.log(myStr.replace(/^.(.*).$/));


/*
Great — let's solve the RegEx questions using **JavaScript**. Below, I’ll provide the JS code snippets to extract each item from the text.

First, let’s store the sample text:

```js
const text = `
John D. Smith (john.smith@example.com) was born on 1984-07-23 and lives in New York. 
He recently bought a new car: Tesla Model 3, license plate NY-2048-XYZ. 
His sister, Mary-Anne O'Neill, born on 1992/11/05, moved to London. 
Her email is maryanne.oneill@subdomain.mail.co.uk and she drives a BMW with plate number UK-1199-ABC.

They both have phone numbers: John's is +1 (212) 555-0198, and Mary-Anne's is +44 20 7946 0958. 
They like reading articles from https://www.technewsworld.com and sometimes from http://news.bbc.co.uk.

Here are some random numbers: 12345, 00123, 99999, 42. Some dates in various formats: 2025-09-21, 09/21/2025, 21.09.2025.
`;
```

---

### 1. **Extract All Email Addresses**

```js
const emails = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g);
console.log(emails);
```

---

### 2. **Find All Phone Numbers**

```js
const phones = text.match(/\+\d{1,3}[\s(]\d{1,4}[\s)]\s?\d{3,4}[-\s]\d{4}/g);
console.log(phones);
```

---

### 3. **Match All Dates**

```js
const dates = text.match(/\b\d{4}[-\/]\d{2}[-\/]\d{2}\b|\b\d{2}\/\d{2}\/\d{4}\b|\b\d{2}\.\d{2}\.\d{4}\b/g);
console.log(dates);
```

---

### 4. **Find All Full Names (with capital letters)**

```js
const names = text.match(/\b[A-Z][a-z]+(?:[-' ]?[A-Z][a-z]+)*\s(?:[A-Z]\.\s)?[A-Z][a-z]+(?:[-'][A-Z][a-z]+)*\b/g);
console.log(names);
```

---

### 5. **Extract All URLs**

```js
const urls = text.match(/https?:\/\/[^\s]+/g);
console.log(urls);
```

---

### 6. **Get All License Plate Numbers**

```js
const plates = text.match(/[A-Z]{2}-\d{4}-[A-Z]{3}/g);
console.log(plates);
```

---

### 7. **Find All 5-Digit Numbers (including leading zeros)**

```js
const fiveDigitNumbers = text.match(/\b\d{5}\b/g);
console.log(fiveDigitNumbers);
```

---

### ✅ Bonus: Extract Only Domain Names from URLs

```js
const domains = text.match(/https?:\/\/(?:www\.)?([^\/\s]+)/g)
  .map(url => url.replace(/https?:\/\/(?:www\.)?/, ''));
console.log(domains);
```

---

Let me know if you'd like these in a runnable snippet or broken down further for learning!

*/