// Selecting HTML Elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


const filterAllButton = document.getElementById('filterAll');
const filterActiveButton = document.getElementById('filterActive');
const filterCompletedButton = document.getElementById('filterCompleted');
const clearCompletedButton = document.getElementById('clearCompleted');


const progressFill = document.querySelector('.progress-fill'); 
const progressText = document.querySelector('.progress-text');


let currentFilter = 'all'; // Initialize current filter



// Function to update the task count
function updateTaskCount() {
  const activeTasks = taskList.querySelectorAll('li:not(.completed)').length;
  document.getElementById('countValue').textContent = activeTasks;
}






// Function to update the task count and progress bar
function updateTaskCountAndProgressBar() {
  const tasks = taskList.querySelectorAll('li');
  const completedTasks = taskList.querySelectorAll('li.completed');
  const progressBar = document.getElementById('progressBar');
  const progressFill = document.querySelector('.progress-fill'); // Select the progress fill element
  const progressText = document.querySelector('.progress-text'); // Select the progress text element

  // Calculate the progress percentage based on completed tasks
  const progressPercentage = (completedTasks.length / tasks.length) * 100;

  // Update the task count
  document.getElementById('countValue').textContent = tasks.length - completedTasks.length;

  // Update the progress fill width with animation
  progressFill.style.width = progressPercentage + '%';

  // Update the progress text
  progressText.textContent = progressPercentage.toFixed(0) + '%'; // Display the percentage with 0 decimal places
}



















// Function to add task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const listContainer = document.createElement('div');
    const listItem = document.createElement('li');
    listItem.innerHTML = `${taskText}`;

    const deleteItem = document.createElement('button');
    deleteItem.innerHTML = `Delete`;
    deleteItem.classList.add('delete-button');

    taskList.appendChild(listContainer);
    listContainer.appendChild(listItem);
    listContainer.appendChild(deleteItem);

    // Clear input value
    taskInput.value = '';

    // Add a click event to delete button
    deleteItem.addEventListener('click', () => {
      listContainer.remove();
      updateTaskCount()
      saveTasksToLocalStorage(); // Update local storage after deleting

    });

    // Add a click event to task text to mark as complete
    listItem.addEventListener('click', () => {
      toggleTaskStatus(listItem);
      saveTasksToLocalStorage(); // Update local storage after marking as complete
    });

      // Update task count
      updateTaskCount();

      // update Count Progress Bar

      updateTaskCountAndProgressBar();

      

    // Save task to local storage
    saveTasksToLocalStorage();
  }
}

// Add a new task when the Enter key is pressed
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

// Function to mark task as complete
function toggleTaskStatus(taskItem) {
  taskItem.classList.toggle('completed');


  // Update task count
  updateTaskCount();

  updateTaskCountAndProgressBar();



  saveTasksToLocalStorage();
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll('li')).map((task) => ({
    text: task.textContent,
    completed: task.classList.contains('completed'),
  }));
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage when the page loads
function loadTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach((task) => {
    const listContainer = document.createElement('div');
    const listItem = document.createElement('li');
    listItem.innerHTML = task.text;

    const deleteItem = document.createElement('button');
    deleteItem.innerHTML = 'Delete';
    deleteItem.classList.add('delete-button');

    if (task.completed) {
      listItem.classList.add('completed');
    }

    taskList.appendChild(listContainer);
    listContainer.appendChild(listItem);
    listContainer.appendChild(deleteItem);

    // Add a click event to delete button
    deleteItem.addEventListener('click', () => {
      listContainer.remove();
      saveTasksToLocalStorage(); // Update local storage after deleting
    });

    // Add a click event to task text to mark as complete
    listItem.addEventListener('click', () => {
      toggleTaskStatus(listItem);
      saveTasksToLocalStorage(); // Update local storage after marking as complete
    });
  });
}

// Load tasks from local storage when the page loads
loadTasksFromLocalStorage();
updateTaskCount()

// update Count Progress Bar
updateTaskCountAndProgressBar();



// Function to filter tasks based on completion status
function filterTasks(filterType) {
    const tasks = Array.from(taskList.querySelectorAll('li'));
    tasks.forEach((task) => {
        const listContainer = task.parentElement;
        switch (filterType) {
            case 'all':
                listContainer.style.display = 'flex';
                break;
            case 'active':
                if (task.classList.contains('completed')) {
                    listContainer.style.display = 'none';
                } else {
                    listContainer.style.display = 'flex';
                }
                break;
            case 'completed':
                if (task.classList.contains('completed')) {
                    listContainer.style.display = 'flex';
                } else {
                    listContainer.style.display = 'none';
                }
                break;
        }
    });
    currentFilter = filterType; // Update the current filter
}


// Add click events to filter buttons
filterAllButton.addEventListener('click', () => filterTasks('all'));
filterActiveButton.addEventListener('click', () => filterTasks('active'));
filterCompletedButton.addEventListener('click', () => filterTasks('completed'));

// Function to hide all delete buttons
function hideDeleteButtons() {
    const deleteButtons = Array.from(taskList.querySelectorAll('.delete-button'));
    deleteButtons.forEach((button) => {
        button.style.display = 'none';
    });
}







// Function to clear completed tasks
function clearCompletedTasks() {
  const completedTasks = Array.from(taskList.querySelectorAll('.completed'));
  completedTasks.forEach((completedTask) => {
      const listContainer = completedTask.parentElement;
      listContainer.remove(); // Remove the entire container (task + delete button)
  });

  // Update task count
  updateTaskCount();

  // update Count Progress Bar
  updateTaskCountAndProgressBar();

  saveTasksToLocalStorage();
}

// Add click event to the "Clear Completed" button
clearCompletedButton.addEventListener('click', clearCompletedTasks);