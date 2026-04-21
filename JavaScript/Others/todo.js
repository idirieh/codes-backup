let tasks = document.querySelector(".new-task");
let addBtn = document.querySelector(".btn");
let userInput = document.getElementById("u-input");
let taskList = document.querySelectorAll(".task");

addBtn.addEventListener("click", () => {
  // create new elements
  let taskDiv = document.createElement("div");
  let myP = document.createElement("p");
  let newTask = document.createTextNode(userInput.value);
  let myIcon = document.createElement("i");
  let myImg = document.createElement("img");
  myImg.setAttribute("src", "img/images/checked.png");

  taskDiv.classList.add("task");
  myIcon.classList.add("fa-regular", "fa-circle");
  myImg.classList.add("check");

  let myX = myIcon.cloneNode();
  myX.classList.add("fa-solid", "fa-xmark");

  myP.appendChild(newTask);
  taskDiv.appendChild(myImg);
  taskDiv.appendChild(myIcon);
  taskDiv.appendChild(myP);
  taskDiv.appendChild(myX);
  tasks.appendChild(taskDiv);
  userInput.value = "";

  // delete the task

  // Select all delete buttons
  let delList = document.querySelectorAll(".fa-xmark");

  // Attach event listeners to delete buttons
  delList.forEach((del) => {
    del.addEventListener("click", (e) => {
      const taskDiv = e.target.parentElement;
      deleteTask(taskDiv);
    });
  });
  addToLocalStorage();
});

// task done

let doneList = document.querySelectorAll(".fa-circle");
let task = document.querySelector(".task");

doneList.forEach((done) => {
  done.addEventListener("click", (e) => {
    let myImg = document.createElement("img");
    myImg.classList.toggle("check");
    e.currentTarget.parentElement.classList.toggle("deleted");
    console.log("done");
  });
});

// delete the task

// Function to delete a task
function deleteTask(taskDiv) {
  Swal.fire({
    title: "Delete Task",
    text: "Are you sure you want to delete this task?",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
    confirmButtonColor: "red",
    showCancelButton: true,
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      taskDiv.remove();
    }
  });
}

// Select all delete buttons
let delList = document.querySelectorAll(".fa-xmark");

// Attach event listeners to delete buttons
delList.forEach((del) => {
  del.addEventListener("click", (e) => {
    const taskDiv = e.target.parentElement;
    deleteTask(taskDiv);
  });
});

// adding the task to localstorage

function addToLocalStorage() {
  let taskString = JSON.stringify(taskList);
  localStorage.setItem("tasks", taskString);
}

// getting the task to localstorage

function getFromLocalStorage() {
  let getTasks = JSON.parse(localStorage.getItem("tasks"));

  taskList = getTasks ?? [];
}
