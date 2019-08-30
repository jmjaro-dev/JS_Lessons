// ARRAY METHODS

// Create an Array
const numbers = [23,34,76,12,34,65];
const numbers2 = new Array(43,54,232,12);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()];

let val;

// Get Array Length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single Value 
val = numbers[0];
// Insert into Array
// numbers[2]= 100;
// Find index of value
val = numbers.indexOf(34);

// console.log(numbers);

// MUTATING Arrays
// Add to end of array
// numbers.push(250);
// // Add to front of array
// numbers.unshift(333);
// // Take off from end of array
// numbers.pop();
// // Take off from front of array
// numbers.shift();
// // Splice values from array
// numbers.splice(2, 3); // 1st param: start index | 2nd param: count of deletion
// // reverse
// numbers.reverse();

// concatenate arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();

val = numbers.sort();

// Ascending sort
val = numbers.sort(function(a, b)
{
  return a - b;
});

// Descending sort  
val = numbers.sort(function(a, b)
{
  return b - a;
});

// Find numbers over 50
function over50(num){
  return num > 50;
}

val = numbers.find(over50);

console.log(val);
// console.log(val);