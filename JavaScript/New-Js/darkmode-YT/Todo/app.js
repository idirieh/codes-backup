const addBtn = document.getElementById('add');
const li = document.querySelectorAll('li');

li.forEach((e) => {
    e.addEventListener('click', (event) => {
        // if
        // element.stopPropagation();
        const currentElement = event.target;
        currentElement.classList.toggle('done')
    })
})

addBtn.addEventListener('click', addTask);

function addTask() {
    let userInput = document.querySelector('input')
    let newTask = userInput.value
    const li = createTaskElement(newTask)

    document.querySelector('ul').appendChild(li)

    li.addEventListener('click', (e) => {
        console.log(e);
        
        // e.classList.toggle('done')
    })
    userInput.value = ''
}

function createTaskElement(task) {
    const li = document.createElement('li')
    const taskNode = document.createTextNode(task)
    li.appendChild(taskNode)
    const delBtn = document.createElement('button')
    const delBtnText = document.createTextNode('Delete')
    delBtn.setAttribute('onclick', 'deleteTask()')
    delBtn.appendChild(delBtnText)
    li.appendChild(delBtn)

    return li
}

function deleteTask(t) {
    t.parentElement.remove()
}