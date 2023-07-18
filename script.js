const inputBox = document.getElementById('input-box');
const taskContainer = document.getElementById('task-container');

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!');
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        li.appendChild(checkbox);
        let span = document.createElement('span');
        span.setAttribute('title', 'Are you sure you want to delete this task?')
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTask();
}

taskContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveTask();
});

function saveTask(){
    localStorage.setItem('taskList', taskContainer.innerHTML);
}

function showTask(){
    taskContainer.innerHTML = localStorage.getItem('taskList');
}
showTask();