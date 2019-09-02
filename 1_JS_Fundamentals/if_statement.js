// if(condition) {
//   // run if condition true
// } else {
//   // run if  condition false
// }

const id = 100;

// // EQUAL TO
// if(id == 100) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

// // NOT EQUAL TO
// if(id != 100) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

// // EQUAL TO
// if(id === 100) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

// // Test if Undefined
// if(typeof id !== 'undefined')
// {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// Greater or Less than
if(id < 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// IF ELSE 
// const color = 'yellow';

// if(color === 'red'){
//   console.log('The color is red');
// } else if(color === 'blue'){
//   console.log('The color is blue');
// } else if(color === 'green'){
//   console.log('The color is green');
// } else {
//   console.log('The color is not red, blue, and green');
// }

// LOGICAL OPERATORS
const name = 'Steve';
const age = 20;

// AND &&
if(age > 0 && age <= 12) {
  console.log(`${name} is a child.`);
} else if(age >= 13 && age <= 19) {
  console.log(`${name} is a teenager.`);
} else {
  console.log(`${name} is an adult.`);
}

// OR ||

if(age < 16 || age > 65) {
  console.log(`${name} can't run in race.`);
} else {
  console.log(`${name} can register for the race.`);
}

// TERNARY OPERATOR condition ? if_true : if_false
console.log(id === 100 ? 'Correct': 'Incorrect');

// Without Braces
if(id === 1100)
  console.log('Correct');
else 
  console.log('Incorrect');