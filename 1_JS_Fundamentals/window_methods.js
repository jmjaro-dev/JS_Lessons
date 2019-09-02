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

// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;
// // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;
// // Scroll points
// val = window.scrollY; // vertical scroll points/position/value
// val = window.scrollX; // horizontal scroll points/position/value

// // Location Object
// val = window.location;              // gets the whole location value
// val = window.location.hostname;     // gets the hostname value
// val = window.location.port;         // gets the port value
// val = window.location.href;         // gets the hyperlink of the address 
// val = window.location.search;       // gets the search history from the browser

// Redirect
// window.location.href = 'https://google.com';  // redirects to another webpage
// // Reload
// // window.location.reload(); // reloads the page
// // History Object
// window.history.go(-2);    // negative values goes back
// val = window.history.length;

val = window.navigator;               // gets the navigator object
val = window.navigator.appName;       // gets the navigator appName
val = window.navigator.appVersion;    // gets the navigator version
val = window.navigator.userAgent;     // gets the navigator userAgent
val = window.navigator.platform;      // gets the navigator platform
val = window.navigator.vendor;        // gets the navigator vendor
val = window.navigator.language;      // gets the navigator language

console.log(val);