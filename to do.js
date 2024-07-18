document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });
        
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteButton);
        
        document.getElementById('tasks').appendChild(taskItem);
        
        taskInput.value = "";
    }
});
