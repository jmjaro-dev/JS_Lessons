// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// Add new text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element 
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// // Remove list item
// lis[2].remove();

// Remove Child Element
list.removeChild(lis[3]);

// Classes & Attributes
const firstLI = document.querySelector('li:first-child');
const link = firstLI.children[0];

let val;

// ClassName & ClassList
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');       // adds a class
link.classList.remove('test');    // removes a class
val = link;

// Attributes
val = link.getAttribute('href');
link.setAttribute('href', 'http://facebook.com');
link.setAttribute('title', 'facebook');
val = link.hasAttributes('title');
link.removeAttribute('title');
val = link;


console.log(val);