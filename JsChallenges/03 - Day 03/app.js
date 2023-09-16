// Task class to represent individual tasks
class Task {
    constructor(taskText) {
        this.text = taskText;
        this.completed = false;
    }

    // Method to toggle task completion status
    toggleCompletion() {
        this.completed = !this.completed;
    }
}

// UI class to manage the user interface
class UI {
    static displayTasks() {
        const tasks = Store.getTasks();
        tasks.forEach(task => UI.addTaskToList(task));
    }

    static addTaskToList(task) {
        const taskList = document.querySelector('#taskList');
        const taskItem = document.createElement('li');
        taskItem.classList.add('todo-item')
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span>${task.text}</span>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(taskItem);
    }

    static clearInput() {
        document.querySelector('#taskInput').value = '';
    }

    static deleteTask(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.remove();
        }
    }

    static editTask(element) {
        if (element.classList.contains('edit')) {
            const span = element.parentElement.querySelector('span');
            const newText = prompt('Edit task:', span.textContent);
            if (newText !== null) {
                span.textContent = newText;
            }
        }
    }

    static toggleCompletion(element) {
        if (element.type === 'checkbox') {
            const textElement = element.nextElementSibling;
            textElement.classList.toggle('completed');
        }
    }
}

// Store class to handle local storage
class Store {
    static getTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        return tasks.map(task => new Task(task.text, task.completed));
    }

    static addTask(task) {
        const tasks = Store.getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static removeTask(taskText) {
        const tasks = Store.getTasks();
        const index = tasks.findIndex(task => task.text === taskText);
        if (index !== -1) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
}

// Event: Display tasks from local storage
document.addEventListener('DOMContentLoaded', UI.displayTasks);

// Event: Add a task
document.querySelector('#addTask').addEventListener('click', () => {
    const taskText = document.querySelector('#taskInput').value;
    if (taskText !== '') {
        const task = new Task(taskText);
        UI.addTaskToList(task);
        Store.addTask(task);
        UI.clearInput();
    }
});

// Event: Remove a task
document.querySelector('#taskList').addEventListener('click', (e) => {
    UI.deleteTask(e.target);
    Store.removeTask(e.target.parentElement.querySelector('span').textContent);
});

// Event: Edit a task
document.querySelector('#taskList').addEventListener('click', (e) => {
    UI.editTask(e.target);
});

// Event: Toggle task completion
document.querySelector('#taskList').addEventListener('change', (e) => {
    UI.toggleCompletion(e.target);
});

