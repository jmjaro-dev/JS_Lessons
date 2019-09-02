const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Jerome';
const tags = 'Web Design, Web Developer, Video Editing';

let val;

val = firstName + lastName;
// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Jerome ';
val += 'Jaropojop';
val = 'Hello, my name is ' + firstName + ' ' + 'and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait.';

// Length
val = firstName.length;

// .concat()
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexof()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt(6);

// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(4, 7);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3); // slice that starts from the end

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Jerome', 'Bobby');

// includes()
val = str.includes('Hello');

console.log(val);