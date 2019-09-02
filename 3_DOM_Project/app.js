// Define UI Variables
const form = document.querySelector('#task-form');        // refers to the task form
const taskList = document.querySelector('.collection');   // refers to the Task List (ul)
const clearBtn = document.querySelector('.clear-tasks');  // refers to the Clear Button
const filter = document.querySelector('#filter');         // refers to the filter 
const taskInput = document.querySelector('#task');        // refers to the input bar

// Load All Event Listeners
loadEventListeners();


// Load All Event Listerners Function Declaration
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add Task event
  form.addEventListener('submit', addTask);
  // Remove Task event
  taskList.addEventListener('click', removeTask);
  // Clear Task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter Task event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LocalStorage
function getTasks(){
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // Converts JSON String to an Object/Array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // Generate all the Task Items from the Local Storage
  tasks.forEach(function(task) {
    // Create an element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create a new link element
    const link = document.createElement('a');
    // Set href attribute of link
    link.setAttribute('href', '#!');
    // Add Class to link
    link.className = 'delete-item secondary-content';
    // Add Icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
  }); 
}

// addTask function declaration
function addTask(e) {
  e.preventDefault();

  if(taskInput.value === '') {
    alert('Add a task');
  } else {
    // Create an element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create a new link element
    const link = document.createElement('a');
    // Set href attribute of link
    link.setAttribute('href', '#!');
    // Add Class to link
    link.className = 'delete-item secondary-content';
    // Add Icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);

    storeTaskInLocalStorage(taskInput.value);
    // Clears the task input field
    taskInput.value = '';
    // console.log(taskList);
    
  }
}

// storeTaskInLocalStorage function Declaration
function storeTaskInLocalStorage(task) {
  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // Converts JSON String to an Array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // adds a new task to the end of tasks array
  tasks.push(task);
  // adds an item to 'tasks' in local storage by converting the 'tasks' object to JSON String
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');
}

// removeTask function declaration
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      // removes the parent LI
      e.target.parentElement.parentElement.remove();

      // remove item from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // Converts JSON String to an Array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // Loop through all the task items
  tasks.forEach(function(task, index){
    // Compare if the li textContent matches the 'task' Array
    if(taskItem.textContent === task) {
      // Removes the value from the array
      tasks.splice(index, 1);
    }
  });
  // update the tasks value in local storage 
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clearTask function declaration
function clearTasks() {
  // // 1st way of clearing tasks
  // taskList.innerHTML = '';

  // 2nd way of clearting tasks
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // removes all tasks in the Local Storage
  localStorage.removeItem('tasks');
}

// filterTasks function declaration
function filterTasks(e) {
  // converts the text to lower case
  const text = e.target.value.toLowerCase();
  // get all the list item
  document.querySelectorAll('.collection-item').forEach(function(task) {
    // assigns the text content/text node to the 'item' variable 
    const item = task.firstChild.textContent;
    // check if the key input matches any task
    if(item.toLowerCase().indexOf(text) >= 0 ) {
      // shows the tasks that matches the filter
      task.style.display = 'block';
    } else {
      // hides the tasks that doesn't match filter
      task.style.display = 'none';
    }
  });
}