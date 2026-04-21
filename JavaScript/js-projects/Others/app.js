const q = document.querySelector(".q");
const a = document.querySelector(".a");

q.addEventListener("click", () => {
  a.classList.toggle("active");
});
