// Create Element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add ID
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('New List Item'));

// Create new link element
const link = document.createElement('a');

// Add class in link
link.className = 'delete-item secondary-content';

// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(document.querySelector('ul.collection').appendChild(li));