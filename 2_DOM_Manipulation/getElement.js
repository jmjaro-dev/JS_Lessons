// Get Elements by ID

// document.getElementById();

// console.log(document.getElementById('task-title'));

// Get things from the element
// console.log(document.getElementById('task-title').id);             // gets the id attribute
// console.log(document.getElementById('task-title').className);      // gets the value of the class attribute

const taskTitle = document.getElementById('task-title');

// // Change Styling
// taskTitle.style.backgroundColor = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.paddingLeft = '5px';
// taskTitle.style.display = 'none';

// // Change Content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color: red">Task List</span>';

// // document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:first-child').style.color = 'indigo';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'cyan';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = 'cyan';
document.querySelector('li:nth-child(even)').style.background = 'green';