/*
 * BOM [Browser Object Model]
 * - alert(Message) => Need No Response Only Ok Available
 * - confirm(Message) => Need Response And Return A Boolean
 * - prompt(Message, Default Message) => Collect Data
 */

// they all are the same
// window.alert("test");
// this.alert("test");
// alert("test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);

/*
 *BOM [Browser Object Model]
 *- setTimeout(Function, Timeout, Additional Params)
 *- clearTimeout(Identifier)
 */

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let btn = document.getElementById("stop");

btn.onclick = function () {
  clearTimeout(count);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let count = setTimeout(sayMsg, 3000, "Ahmed", 28);

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);

/*
 * BOM [Browser Object Model]
 * - location Object
 * --- href Get / Set [URL || Hash || File || Mail]
 * --- host
 * --- hash
 * --- protocol
 * --- reload()
 * --- replace()
 * --- assign()
 */

console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

/*
 * BOM [Browser Object Model]
 * - History API
 * --- Properties
 * ------ length
 * --- Methods
 * ------ back()
 * ------ forward()
 * ------ go(Delta) => Position In History

 * Search [For Advanced Knowledge]
 * - pushState() + replaceState()
*/

console.log(history);

/*
 * BOM [Browser Object Model]
 * - stop()
 * - print()
 * - focus()
 * - scrollTo(x, y || Options) - both are the same but one is not supported
 * - scroll(x, y || Options) - same as scrollTo but not supported by Safari
 * - scrollBy(x, y || Options) - will scroll from the last point
 */

let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

/*
 * BOM [Browser Object Model]
 * - Practice => Scroll To Top
 * - scrollX [Alias => PageXOffset]
 * - scrollY [Alias => PageYOffset]
 */

// console.log(window.scrollX === window.pageXOffset); // true

let up = document.getElementById("up");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
