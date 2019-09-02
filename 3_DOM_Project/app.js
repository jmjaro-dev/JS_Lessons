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
  // Add Task event
  form.addEventListener('submit', addTask);
  // Remove Task event
  taskList.addEventListener('click', removeTask);
  // Clear Task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter Task event
  filter.addEventListener('keyup', filterTasks);
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
    // Clears the task input field
    taskInput.value = '';
    // console.log(taskList);
  }
}

// removeTask function declaration
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure?')) {
      // removes the parent LI
      e.target.parentElement.parentElement.remove();
    }
  }
}

// clearTask function declaration
function clearTasks() {
  // // 1st way of clearing tasks
  // taskList.innerHTML = '';

  // 2nd way of clearting taks
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
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