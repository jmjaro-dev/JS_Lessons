// document.getElementsByClassName()
const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[2]);
items[2].style.color = 'red';
items[2].textContent = 'Hello';
