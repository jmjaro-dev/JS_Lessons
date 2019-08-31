
let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child'); 

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[3].nodeName;  // get
val = list.childNodes[1].nodeType;

// Node Types
// 1 - Element
// 2 - Attribute
// 3 - Text
// 4 - CDATASection
// 5 - EntityReference
// 6 - Entity
// 7 - ProcessingInstruction
// 8 - Comment
// 9 - Document
// 10 - Document Type
// 11 - Document Fragment
// 12 - notation

// Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';    // sets the id of the 1st child of the 4th child of list(ul)
val = list.children[3].children[0];               // gets the 1st child of the 4th child of list[ul] 
val = list.children[3].children[0].children[0];

// First child
val = list.firstChild;          
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);



