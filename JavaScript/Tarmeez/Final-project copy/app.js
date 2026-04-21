// making the date
var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()+' ';

console.log(date);

// variables

const addTask = document.getElementById('add');
const task = document.getElementById('task-name');
const container = document.querySelector('.container')
const icon = document.querySelector('.icon');
const doneTask = document.querySelector('.done');
const editTask = document.querySelector('.edit');
const deleteTask = document.querySelector('.delete');
const calendar = document.querySelector('.fa-calendar-days')

// adding event listener - new task

addTask.addEventListener('click', function(){
    const userPrompt = prompt("الرجاء إدخال اسم المهمة");    

    if(userPrompt != "" & userPrompt != null){
        // new elements
        const icons = icon.cloneNode(true);
        const newCalender = calendar.cloneNode(true);
        const newDiv = document.createElement('div');
        const newDiv1 = document.createElement('div');
        const newTask = document.createElement('p');
        const newSpan = document.createElement('span');
        const todayDate = document.createTextNode(date);
        const taskName = document.createTextNode(userPrompt);

        // seting attributes

        newDiv.setAttribute('id', 'task');
        newSpan.setAttribute('class', 'date');
        newTask.setAttribute('id', 'task-name');

        // appending new elements
        
        newSpan.appendChild(todayDate);
        newSpan.appendChild(newCalender);
        newTask.appendChild(taskName);
        newDiv1.appendChild(newTask);  
        newDiv1.appendChild(newSpan);        
        newDiv.appendChild(newDiv1);
        newDiv.appendChild(icons);
        container.appendChild(newDiv);
    } 
})


// done 

const done = document.getElementsByClassName('done');
const theTask = document.querySelectorAll('#task');

for(i = 0; i < done.length; i++){

    let currentTask = theTask[i]
    done[i].addEventListener('click', function(){
    
        const checkClassName = 'fa-check';
        const xmarkClassName = 'fa-xmark';        


        console.log(this.classList.contains(checkClassName))
        // if a play button, remove the play button class and add pause button class
        if (this.classList.contains(checkClassName)) {
            this.classList.toggle(checkClassName);
            this.classList.toggle(xmarkClassName);
            currentTask.style.backgroundColor = '#15e42d'                    
            // if a pause button, remove pause button class and add play button class
        } else {
            this.classList.toggle(xmarkClassName);
            this.classList.toggle(checkClassName);
            currentTask.style.backgroundColor = 'white'   
        }
    
        console.log('worked!');
    })

}


// delete the task

const deleteBtn = document.querySelectorAll('.delete');
const taskName = document.querySelectorAll('#task-name');

for(i = 0; i < deleteBtn.length; i++) {
    const currentTaskName = taskName[i].textContent; 
    // let currentTask = theTask[i];
    
    deleteBtn[i].addEventListener('click', function(e){
        if(confirm(`هل انت متأكد من حدف مهمة : ${currentTaskName}`)){
            // currentTask.remove();
            let target = e.target;
            target.parentElement.parentElement.remove();
        }
        
    })
}

// edit the task

const editBtn = document.querySelectorAll('.edit');

console.log(taskName)
console.log(taskName[1])

for(i = 0; i < editBtn.length; i++){
    const currentTaskName = taskName[i];        
    
    editBtn[i].addEventListener('click', function(){
        const userPrompt = prompt('الرجاء إدخال اسم المهمهة الجديد');       
        currentTaskName.innerHTML = userPrompt

       
            
    })
    
}



