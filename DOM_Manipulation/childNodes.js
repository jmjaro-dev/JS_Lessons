
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
list.children[3].children[0].id = 'test-link';

// First child
// val = list.firstChild;


console.log(val);



