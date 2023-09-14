const todoList = {
    _todos: [],

    get todos(){
        return this._todos
    },

    set addTodo(todo){
        if(typeof todo === 'string' && todo.trim() !== '' ){
            this._todos.push(todo)
            console.log(`New todo added:  ${todo}`)
        }else{
            console.log(`Invalid Entry`)
        }
    },



    set removeTodo(index){
        if(typeof index === 'number' && index >= 0 && index < this._todos.length){
            const removeTodoItem = this._todos.splice(index, 1)
            console.log(`Removed todo item:  ${removeTodoItem}`)
        }else{
            console.log(`Invalid index`)
        }
    },

    set updateTodo({index, newText}){
        if(typeof index === 'number' && index <= this._todos.length && typeof newText === 'string' && newText.trim() !== ''){
            this._todos[index] = newText
            console.log(`Updated todo:  "${newText}"` )
        }else{
            console.log(`Invalid index or Text.`)
        }

    },



}


// testing 


todoList.addTodo = "read the diary of CEO"
todoList.addTodo = "Practice ReactJS"
todoList.addTodo = "Learn C# on school holiday"
todoList.addTodo = "Master Css grid and flex box"

console.log("To-do list:", todoList.todos);



todoList.updateTodo = {index: 1, newText: "Build projects using reactJS"}
console.log("Updated list:", todoList.todos);


todoList.removeTodo = 0

console.log("Final list:", todoList.todos);