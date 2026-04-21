

let tasks = [
    {
        "title": "قراءة الكتاب",
        "date": "7/12/2022",
        "isDone": false
    },
    {
        "title": "انهاء المشروع النهائي",
        "date": "7/12/2022",
        "isDone": false
    }
];


function getTasksFromStorage(){
    let retrivedTask = JSON.parse(localStorage.getItem('tasks'));
    // if(retrivedTask == null){
    //     tasks = [];
    // } else {
    //     tasks = retrivedTask;
    // }

    // same as above code but with oneline
    tasks = retrivedTask ?? [];
}

getTasksFromStorage();

function fillTaskOnPage() {
    document.getElementById('tasks').innerHTML = "";
    let num = 0;
    for(task of tasks){        
        let content = `
        <div class="task ${task.isDone ? "done" : ""}">
            <div>
                <p id="task-name">${task.title}</p>
                <span class="date"><i class="fa-solid fa-calendar-days"></i> ${task.date} </span>
            </div>
            <div class="icon">
                ${task.isDone ? `
                <i class='done fa-solid fa-xmark' onClick='toggleDoneTask(${num})'></i>
                ` : `
                <i class="done fa-solid fa-check" onClick="toggleDoneTask(${num})"></i>
                `}                
                <i class="edit fa-regular fa-pen-to-square" onClick="editTask(${num})"></i>
                <i class="delete fa-solid fa-trash" onClick="deleteTask(${num})"></i>
            </div>
        </div>
        `;
        
        // window.localStorage.setItem('theContent', content)
        document.getElementById('tasks').innerHTML += content;
        num++;
    }    

}

fillTaskOnPage();

// adding new task

const addBtn = document.getElementById('add');

addBtn.addEventListener('click', function(){
    // making the date
    var today = new Date();
    var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

    let taskName = prompt('الرجاء إدخال اسم المهمة');

    if(taskName != null){
        let taskobj = {
            "title": taskName,
            "date": date,
            "isDone": false
        };
        tasks.push(taskobj);
        storeTasks();
        fillTaskOnPage();
    }
    
    

})



// deleting the task

function deleteTask(index){
    let currentTask = tasks[index];
    let isConfrimed = confirm("هل انت متأكد من حدف مهمة: " + currentTask.title)
    if(isConfrimed){
        tasks.splice(index, 1);
        fillTaskOnPage();
        storeTasks();
    }

}

// editing the task

function editTask(index){
    let currentTask = tasks[index];
    let newTask = prompt("الرجاء إدخال اسم المهمة الجديدة", currentTask.title);    
    if(newTask != null){
        currentTask.title = newTask;
        storeTasks();
        fillTaskOnPage();
    }
}


// task complete check

// const mainTask = document.querySelectorAll('div#task');

function toggleDoneTask(index){
    let currentTask = tasks[index];

    // if(currentTask.isDone){
    //     currentTask.isDone = false;
    // }else {
    //     currentTask.isDone = true;
    // }

    // same as the above but less code
    currentTask.isDone = !currentTask.isDone;
    storeTasks();
    fillTaskOnPage();    
}


// store the tasks

function storeTasks(){
    let taskString = JSON.stringify(tasks);
    window.localStorage.setItem('tasks', taskString);
}