// Document (Document Object Model)

console.log(document);
console.log(document.title);
console.log(document.body);
console.log(document.forms[1].user.value);
console.log(document.links[0].href);

// selector

let idSelector = document.getElementById("word");
let classSelector = document.getElementsByClassName("content");
let tagNameSelector = document.getElementsByTagName("p");
let querySelector = document.querySelector(".content");
let queryAllSelector = document.querySelectorAll(".content");

console.log(idSelector);
console.log(classSelector);
console.log(tagNameSelector[1]);
console.log(querySelector);
console.log(queryAllSelector);

console.log(idSelector.innerHTML);
console.log(idSelector.textContent);

document.images[0].src = "https://picsum.photos/seed/picsum/100/100";
document.images[0].alt = "mountain";
document.images[0].title = "mountain";
document.images[0].id = "pic";
document.images[0].className = "img";
console.log(document.images[0].attributes);

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("href"));
myLink.setAttribute("id", "mylink");

let myP = document.querySelector(".content");

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("date-src") === "") {
    myP.removeAttribute("date-src");
  } else {
    myP.setAttribute("date-src", "new Value");
  }
} else {
  console.log(`No`);
}

let mytitle = document.querySelector("h1");

if (mytitle.hasAttribute) {
  console.log(`Yes has Attributes`);
} else {
  console.log(`No doesnt have any Attributes`);
}

// create and append element

let myElement = document.createElement("div");
let myAttir = document.createAttribute("date-custom");
let myTxt = document.createTextNode("Product One");
let mycomment = document.createComment("this is for product one");

myElement.className = "product";
myElement.setAttributeNode(myAttir);
myElement.setAttribute("data-test", "testing");

myElement.appendChild(mycomment);
myElement.appendChild(myTxt);
document.body.appendChild(myElement);

// challenge

for (let i = 0; i < 10; i++) {
  let myDiv = document.createElement("div");
  let myHeading = document.createElement("h3");
  let myParagraph = document.createElement("p");
  let headingText = document.createTextNode(`Product title ${i + 1}`);
  let myParagraphText = document.createTextNode("Product Description");
  myDiv.className = "product";
  myParagraph.appendChild(myParagraphText);
  myHeading.appendChild(headingText);
  myDiv.appendChild(myHeading);
  myDiv.appendChild(myParagraph);
  document.body.appendChild(myDiv);
}

//* children elements

console.log("this is my element", myElement);
console.log(myElement.children);
console.log(myElement.children[0]);
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
console.log(myElement.lastChild);
console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);

/*
 * DOM [Traversing]
 * - nextSibling
 * - previousSibling
 * - nextElementSibling
 * - previousElementSibling
 * - parentElement
 */

let myPe = document.querySelector(".content");

console.log(myPe.nextElementSibling);
console.log(myPe.nextSibling);
console.log(myPe.previousElementSibling);
console.log(myPe.previousSibling);

console.log(myPe.parentElement);
