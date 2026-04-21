/* !
*DOM [Events]
*Use events on HTML
*Use events on JS
*- onclick
*- oncontextmenu
*- onmouseenter
*- onmouseleave
*
*- onloead
*- onscroll
*- onresize
*
*- onfocus (اذا ضغط)
*- onblur (اذا شال)
*- onsubmit

*/

let myBtn = document.getElementById("btn");
let myName = document.querySelector(".name");
let myTitle = document.querySelector(".title");

myBtn.onmouseleave = function () {
  console.log("this is mouse leave");
};

window.onscroll = function () {
  console.log("the page is scrolled");
};

window.onresize = function () {
  console.log("the page is resized");
};

window.onload = function () {
  myName.focus();
};

//* event simulation
myTitle.onblur = function () {
  document.links[0].click(); // when you unfocus the input box will go to the link automatically
};

// console.log(document.links[0]);

document.links[0].onmouseenter = function (e) {
  console.log(e);
};

document.links[0].onclick = function (e) {
  // console.log(e);
  // e.preventDefault(); //توقف الحدث
};

//* Validate From and preventDefault

let nameInput = document.querySelector("[name='name']");
let tileInput = document.querySelector("[name='title']");

document.forms[0].onsubmit = function (e) {
  let userNameValid = false;
  let userTitleValid = false;

  console.log(nameInput.value);
  console.log(nameInput.value.length);

  if (nameInput.value != "" && nameInput.value.length <= 10) {
    userNameValid = true;
  }

  if (tileInput.value != "") {
    userTitleValid = true;
  }

  if (userNameValid === false || userTitleValid === false) {
    e.preventDefault();
  }
};

// * DOM [Class List], classlist, length, contains, item(index), add, remove, toggle

let mydiv = document.getElementById("mydiv");
let myAddDiv = document.getElementById("add");
let myToggleDiv = document.getElementById("toggle");

console.log(mydiv.classList);
console.log(typeof mydiv.classList);
console.log(mydiv.classList.contains("Ahmed")); //false
console.log(mydiv.classList.contains("one")); //true
console.log(mydiv.classList.item(2));

myAddDiv.onclick = function () {
  this.classList.add("add-one", "add-two");
};

mydiv.onclick = function () {
  this.classList.remove("three", "test");
};

myToggleDiv.onclick = function () {
  this.classList.toggle("man");
};

//* DOM [CSS], style, cssText, removeProperty(propertyName), setProperty(propertyName, value, priority)

mydiv.style.color = "red";
mydiv.style.fontWeight = "bold";

myAddDiv.style.cssText = "color: green; font-weight: bold; opacity: 0.9";

myAddDiv.style.removeProperty("opacity");
myToggleDiv.style.setProperty("color", "blue", "important");

// * check the stylesheets
console.log(
  document.styleSheets[0].rules[0].style.removeProperty("line-height")
);

/*
 * DOM [Deal With Elements]
 * - before [Element || String]
 * - after [Element || String]
 * - append [Element || String]
 * - prepend [Element || String]
 * - remove
 */

let createdP = document.createElement("p");

mydiv.before("Hello from my JS");
myAddDiv.after("Also Hello from my JS");
myToggleDiv.append("append from my JS");
// element.remove();

/*
 * DOM [Cloning]
 * - cloneNode(Deep)
 */

let myP = document.querySelector("p").cloneNode(true); //if true will clone all child nodes
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`; // the clone even copy the id so we need to change the id

myDiv.appendChild(myP);

/*
 * DOM [Add Event Listener]
 * - addEventListener
 * - Use Without On
 * - Attach Multiple Events
 * - Error Test

 * Search
 * - Capture & Bubbling JavaScript
 * - removeEventListener
*/

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama"; //will do nothing

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});
