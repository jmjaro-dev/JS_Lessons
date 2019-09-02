// // document.getElementsByClassName()
// const items = document.getElementsByClassName('collection-item');

// console.log(items);
// console.log(items[2]);
// items[2].style.color = 'red';
// items[2].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// // document.getElementsByTagName();
// let lis = document.getElementsByTagName('li');

// // console.log(lis);
// // console.log(lis[0]);

// lis[0].style.color = 'red';
// lis[0].textContent = 'Hello';

// // convert HTML collection to Array
// lis = Array.from(lis);

// console.log(lis);

// lis.reverse(); // reverse the array

// console.log(lis);

// lis.forEach(function(li, index) {
//   console.log(`${index} : ${li.className}`);
//   li.textContent = `${index}: Hey there Ten`;
// });


// // document.querySelectorAll()
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//   item.textContent = `${index}: Hello World Hi Ten`;
// });

// console.log(items);

const liOdd = document.querySelectorAll('li:nth-child(odd)');       // gets Odd li
const liEven = document.querySelectorAll('li:nth-child(even)');     // gets even li

// gets odd child using forEach loop
liOdd.forEach(function(li, index){
  li.style.background = 'cyan';
});

// gets even child using for loop
for(let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#ccc';
}