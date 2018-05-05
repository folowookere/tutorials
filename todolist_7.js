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
  },
  toggleAll: function() {
    var totalToDos = this.todos.length;
    var completedToDos = 0;
    
    //Get number of completed todos.
    for (var i = 0; i < totalToDos; i++) {
      if (this.todos[i].completed === true) {
        completedToDos++;
      }
    }
    
    // if everything is true, make everything false
    if (completedToDos === totalToDos) {
      //Make everything false
      for (var i = 0; i < totalToDos; i++) {
        this.todos[i].completed = false;
     } //Case 2: otherwise make everything true
      } else {
        for (var i = 0; i < totalToDos; i++) {
          this.todos[i].completed = true;
        }
      }
    this.displayToDos();
  }
};

var displayToDosButton = document.getElementById('displayToDosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayToDosButton.addEventListener('click', function() {
  todoList.displayToDos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});