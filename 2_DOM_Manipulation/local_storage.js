// Set Local Storage
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', 36);

// // Remove item from Local Storage
// localStorage.removeItem('age');

// // Get item from Local Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// // Clear Local Storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  const task = document.querySelector('#task').value;
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // Converts JSON String to an Object
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // adds a new task to the end of tasks array
  tasks.push(task);
  // adds an item to 'tasks' in local storage by converting the 'tasks' object to JSON String
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
  // logs all the task in the console
  tasks.forEach(function(){
    console.log(task);
  });
});

// // Set Session Storage
// sessionStorage.setItem('name', 'Patrick');


