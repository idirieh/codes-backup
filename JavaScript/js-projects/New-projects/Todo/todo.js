const userInput = document.getElementById('user-input')
const addBtn = document.getElementById('add')
const tasks = document.querySelector('.tasks-list')

function createElement(taskText) {
    const newDiv = document.createElement('div')
    const delBtn = document.createElement('button')
    const newTask = document.createElement('h4')
    
    newDiv.setAttribute('class', 'new-task')
    newDiv.setAttribute('onclick', 'completeTask(this)')
    delBtn.setAttribute('id', 'del')
    delBtn.setAttribute('onclick', 'delTask(this)')
    newTask.textContent = taskText
    delBtn.textContent = 'Delete'
    newDiv.append(newTask, delBtn)

    return newDiv
}

//* Add Task
function addTask() {
    const userTask = userInput.value;
    if(!userTask){
        alert('Write a new Task')
        return 
    } 
    const task = createElement(userTask)
    tasks.appendChild(task)  
    userInput.value = ''
    updateLocalStorage()
}

addBtn.addEventListener('click', addTask)
userInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault()
        addTask()
    }
})

//* Complete Task
function completeTask(e) {
        // const target = e.currentTarget
        e.classList.toggle('checked')
}

// allTasks.forEach(task => {
//     task.addEventListener('click', (e) => {
//         const target = e.currentTarget
//         target.classList.toggle('checked')
//     })
// })


//* Delete Task
function delTask(e) {
    // console.log(e);
    // console.log(e.parentNode);
    // const parentElement = e.parentNode
    // parentElement.remove()
    if(confirm('Are you sure? ')){
        e.parentNode.remove() 
        updateLocalStorage()
    }
       
}

function updateLocalStorage() {
    const taskElements = document.querySelectorAll(".new-task");
    const tasksList = [];
    taskElements.forEach((taskElement) => {
        const taskText = taskElement.querySelector("h4").textContent;
        tasksList.push(taskText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasksList));
}


function getTasksFromLocalStorage() {
    const tasksList = JSON.parse(localStorage.getItem("tasks"));
    if (tasksList && tasksList.length > 0) {
        tasksList.forEach((taskText) => {
        const taskElement = createElement(taskText);
        tasks.appendChild(taskElement);
        });
    }
}

getTasksFromLocalStorage();