let btn = document.querySelector(".btn");
let newTask = document.querySelector(".new-task");
let tasks = document.querySelector(".tasks");

newTask.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    btn.click();
  }
});

// adding new task

btn.addEventListener("click", function () {
  // create new task element
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  let span = document.createElement("span");

  // adding text to the elements
  let task = document.createTextNode(newTask.value);
  let del = document.createTextNode("Delete");

  // adding the classes
  div.classList = "task";
  span.classList = "del";

  // appending the elements
  h3.appendChild(task);
  span.appendChild(del);
  div.appendChild(h3);
  div.appendChild(span);
  tasks.appendChild(div);

  let deleteBtn = document.querySelectorAll(".del");

  deleteBtn.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.currentTarget.parentElement.remove();
    });
  });
});

let deleteBtn = document.querySelectorAll(".del");

deleteBtn.forEach((b) => {
  b.addEventListener("click", (e) => {
    e.currentTarget.parentElement.remove();
  });
});
