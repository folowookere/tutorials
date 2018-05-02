//To Do List

var todoList = {
  todos: [],
  displayToDos: function() {
  if (this.todos.length === 0) {
    console.log("Your to do list is empty");
  } else {
   console.log('My todos:');
   for (var i = 0; i < this.todos.length; i++) {
    if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
      } else {
            console.log('( )', this.todos[i].todoText);
      }
    }
   }
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
    var todos = this.todos[position];
    todos.completed = !todos.completed;
    this.displayToDos();
  }
};
