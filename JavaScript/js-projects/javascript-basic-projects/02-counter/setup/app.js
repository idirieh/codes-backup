const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");
const result = document.getElementById("value");

let counter = 0;

increase.addEventListener("click", () => {
  counter += 1;
  result.textContent = counter;
  colorValue();
});

reset.addEventListener("click", () => {
  counter = 0;
  result.textContent = counter;
  colorValue();
});

decrease.addEventListener("click", () => {
  counter -= 1;

  result.textContent = counter;
  colorValue();
});

function colorValue() {
  let num = result.textContent;
  if (num > 0) {
    result.style.color = "green";
  } else if (num < 0) {
    result.style.color = "red";
  } else {
    result.style.color = "hsl(209, 61%, 16%)";
  }
}
