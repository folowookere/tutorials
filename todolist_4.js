//To Do List

var todoList = {
  todos: [],
  displayToDos: function() {
   console.log('My todos:', this.todos);
  },
  addToDo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayToDos();
  },
  changeToDo: function(position, todoText) {
   this.todos[position].todoText = todoText; 
    this.displayToDos();
  },
  deleteToDo: function(position) {
    this.todos.splice(position, 1);
    this.displayToDos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayToDos();
  }
};
