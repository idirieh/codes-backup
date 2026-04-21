const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);

function rgbToHex(r, g, b) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const hexR = componentToHex(r);
  const hexG = componentToHex(g);
  const hexB = componentToHex(b);
  const hexColor = "#" + hexR + hexG + hexB;
  return hexColor.toUpperCase(); // Convert to uppercase
}

function getRandomNumber(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

const randomRgb = getRandomNumber(red, green, blue);
const hexColor = rgbToHex(red, green, blue);

btn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  const randomRgb = getRandomNumber(red, green, blue);
  const hexColor = rgbToHex(red, green, blue);

  document.body.style.backgroundColor = randomRgb;
  color.textContent = hexColor;
});
