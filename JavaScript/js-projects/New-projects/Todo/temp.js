// (() => {
//    const tasks = document.getElementById('tasks')
//     const addBtn = document.getElementById('add')
//     const userInput = document.getElementById('user-input')
    
    
//     function addingTask() {
//         const userTask = userInput.value
//         const newLi = document.createElement('li')
//         const newTask = document.createTextNode(userTask)
//         newLi.appendChild(newTask)
//         tasks.appendChild(newLi)
//         userInput.value = ''
//     }

//     addBtn.addEventListener('click', addingTask);

// })()


(() => {
    // const allTasks = ["Do your Homework", "Run a Marathoon", "Complete the course"]
    const allTasks = []
    const addBtn = document.getElementById('add')
    const tasks = document.getElementById('tasks')
    const userInput = document.getElementById('user-input')
    

    allTasks.forEach(task => tasks.innerHTML += `<li>${task}</li>`)
    function setTasks(arr) {
        window.localStorage.setItem('allTasks', arr)
    }
    function getTasks() {
        // const tasks = window.localStorage.getItem(tasks)
    }

    
    function addTask() {
        const userTask = userInput.value
        allTasks.push(userTask)
        console.log(allTasks);
        tasks.innerHTML += `<li>${userTask}</li>`
        userInput.value = ''
    }

    // function addTask() {
    //     const userTask = userInput.value
    //     const newLi = document.createElement('li')
    //     const newTask = document.createTextNode(userTask)
    //     newLi.appendChild(newTask)
    //     tasks.appendChild(newLi)
    //     userInput.value = ''
    // }

    addBtn.addEventListener('click', addTask);

})()
// events()

// const tasks = document.getElementById('tasks')
// const addBtn = document.getElementById('add')
// const userInput = document.getElementById('user-input')


// function addingTask() {
//     const userTask = userInput.value
//     const newLi = document.createElement('li')
//     const newTask = document.createTextNode(userTask)
//     newLi.appendChild(newTask)
//     tasks.appendChild(newLi)
//     userInput.value = ''
// }

// addBtn.addEventListener('click', addingTask);

