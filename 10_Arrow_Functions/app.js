// const sayHello = function() {
//   console.log('Hello Patrick Bajo');
// }

// const sayHello = () => {
//   console.log('Hello Patrick Bajo');
// }

// sayHello();

// One Line function doest not need curly braces
// const sayHello = () => console.log('Hello Patrick Bajo');
  
// sayHello();

// // One line returns
// const sayHello = () => 'Hello Patrick Bajo';
  
// console.log(sayHello());

// // Return an Object
// const sayHello = () => ({msg: 'Hello'});
// console.log(sayHello());

// // Single param doest not need parenthesis ()
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Patrick Star');

// // Multiple params needs parenthesis ()
// const sayHello = (firstname, lastname) => console.log(`Hello ${firstname} ${lastname}`);
// sayHello('Patrick', 'Star');

const users = ['Nathan', 'John', 'William'];

// // ES5 Version
// const nameLength = users.map(function(name) {
//   return name.length;
// });

// console.log(nameLength);

// // ES6 Arrow Function
// const nameLength = users.map(name => {
//   name.length
// });
// console.log(nameLength);

// Shorter Arrow Function
const nameLength = users.map(name => name.length);
console.log(nameLength);