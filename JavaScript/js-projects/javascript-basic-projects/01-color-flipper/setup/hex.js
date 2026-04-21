const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = getRandonNumber();
    hexColor += hex[randomNumber];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function getRandonNumber() {
  return Math.floor(Math.random() * hex.length);
}

console.log(getRandonNumber());
