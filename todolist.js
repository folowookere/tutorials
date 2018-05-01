//To Do List
// to-dos array
var todos = ["item 1", "item 2", "item 3"];


//Display To-Do List
function displayToDos() {
	console.log('My todos:', todos);
}

//Adding To-Do's to List
function addToDo(todo) {
	todos.push(todo);
	displayToDos();
}

//Changing existing To-Do
function changeToDo(position, newValue) {
	todos[position] = newValue;
	displayToDos();
}

//Deleting a To-Do
function deleteToDo (position) {
todos.splice(position, 1);
displayToDos();
}