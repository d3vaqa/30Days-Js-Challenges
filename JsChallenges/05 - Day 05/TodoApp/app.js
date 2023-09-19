const taskInput = document.getElementById('taskInput')
const taskList = document.getElementById('taskList')


// function to add task
function addTask(){
    const taskText = taskInput.value.trim()

    if(taskText !== ''){
        const listItem = document.createElement('li')
        listItem.innerHTML = `${taskText} 
        <button class="delete-button"> Delete </button>`

        taskList.appendChild(listItem)

        // clear input value

        taskInput.value = ''

        // add a click event to delte button

        const deleteButton = listItem.querySelector(".delete-button")
        deleteButton.addEventListener('click', () => listItem.remove())
    }

}



// Add a new task when the Enter key is pressed
taskInput.addEventListener('keydown',(event) => {
    if(event.key === "Enter"){
        addTask()
    }
})