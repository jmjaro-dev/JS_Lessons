// WINDOW METHODS  - OBJECT & PROPERTIES

// alert
// alert('Hello World!');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidth;
// Inner height and width
val = window.innerHeight;
val = window.innerWidth;
// Scroll points
val = window.scrollY; // vertical scroll points/position/value
val = window.scrollX; // horizontal scroll points/position/value

// Location Object
val = window.location;              // gets the whole location value
val = window.location.hostname;     // gets the hostname value
val = window.location.port;         // gets the port value
val = window.location.href;         // gets the hyperlink of the address 
val = window.location.search;       // gets the search history from the browser

console.log(val);