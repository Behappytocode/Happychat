document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    let tasks = [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span class="task-text">${task}</span>
                <div class="task-buttons">
                    <button class="edit" onclick="editTask(${index})">Edit</button>
                    <button class="delete" onclick="deleteTask(${index})">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push(taskText);
            taskInput.value = '';
            renderTasks();
        }
    }

    function editTask(index) {
        const newTask = prompt("Edit your task:", tasks[index]);
        if (newTask !== null && newTask.trim() !== "") {
            tasks[index] = newTask.trim();
            renderTasks();
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    addTaskButton.addEventListener("click", addTask);

    window.editTask = editTask;
    window.deleteTask = deleteTask;
});

