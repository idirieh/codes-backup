//* (********** the Header **********)

// create the elements for header

let myAll = document.querySelectorAll("*");
let myHeader = document.createElement("header");
let myTitle = document.createElement("h2");
let myNav = document.createElement("nav");
let myList = document.createElement("list");
let myListItem = document.createElement("li");
let myLink = document.createElement("a");
// let myHeader = document.createElement("header");

// adding text

let myTitleText = document.createTextNode("ElZero");
let myHomeLink = document.createTextNode("Home");
let myAboutLink = document.createTextNode("About");
let myServiceLink = document.createTextNode("Service");
let myContactLink = document.createTextNode("Contact");

// adding attirbutes

myLink.setAttribute("href", "#");
myList.classList = "main-list";

// appending the elements

myTitle.appendChild(myTitleText);
myHeader.appendChild(myTitle);
document.body.appendChild(myHeader);

// appending nav

let myLinkList = [myHomeLink, myAboutLink, myServiceLink, myContactLink];

for (let i = 0; i < myLinkList.length; i++) {
  let myNewLink = myLink.cloneNode(true);
  let myNewListItem = myListItem.cloneNode(true);
  myNewLink.classList = `clone-${i + 1}`;
  myNewLink.appendChild(myLinkList[i]);
  myNewListItem.appendChild(myNewLink);
  myList.appendChild(myNewListItem);
  myHeader.appendChild(myList);
}

// style the header

document.body.style.cssText = `background-color: rgb(228, 228, 228);
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
min-height: 100vh;
display: flex;
flex-direction: column;
margin: 0;`;

myHeader.style.cssText = `  background-color: #fff;
display: flex;
justify-content: space-between;
padding: 0 1em;`;

// myLink.style.cssFloat

//* (********** the Main **********)

// create elements for products

let main = document.createElement("main");
let myDiv = document.createElement("div");
let mySpan = document.createElement("span");
let mySmHeading = document.createElement("h3");

// adding text

let myProduct = document.createTextNode("Prodect");

// adding attirbutes
for (let i = 0; i < 15; i++) {
  let mybox = myDiv.cloneNode(true);
  let myNewProduct = myProduct.cloneNode(true);
  let myNewSmHeading = mySmHeading.cloneNode(true);
  let myNum = document.createTextNode(`${i + 1}`);
  mybox.classList = "box";
  myNewSmHeading.appendChild(myNum);
  mybox.appendChild(myNewSmHeading);
  mybox.appendChild(myNewProduct);
  main.appendChild(mybox);
  document.body.appendChild(main);
}

// adding style to the main

//* (********** the Footer **********)

// create the elements

let footer = document.createElement("footer");
let myP = document.createElement("p");

// text

let footerText = document.createTextNode("Copyright 2023");

// appending elements

myP.appendChild(footerText);
footer.appendChild(myP);
document.body.appendChild(footer);

// style the footer

footer.style.cssText = `  background-color: #2bbbad;
color: #fff;
text-align: center;
padding: 0.5em;
margin-top: auto;`;

myP.style.fontSize = "1.2rem";
