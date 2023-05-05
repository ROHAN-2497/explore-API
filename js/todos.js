function loadTodos(){
 fetch('https://jsonplaceholder.typicode.com/todos')
 .then(res => res.json())
 .then(data => displayTodos(data))
}
function displayTodos(todos){
const todoContainer = document.getElementById('todo-container')
for(const todo of todos){
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    console.log(todo)
    todoDiv.innerHTML = `
    <h3>title- ${todo.title}</h3>

    `
    todoContainer.appendChild(todoDiv)
}
}
loadTodos()