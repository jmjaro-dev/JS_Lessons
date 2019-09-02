const num1 = 100;
const num2 = 50;

let val;

// Simple Math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.5);
val = Math.ceil(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 3);
val = Math.min(2, 33, 4 ,1 ,55 ,6, -2);
val = Math.max(2, 33, 4 ,1 ,55 ,6, -2);
val = Math.random();
val = Math.floor(Math.random() * 20 + 1); // random number from 1 to 20

console.log(val);