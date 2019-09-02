// DATES
let val;
const today = new Date();
console.log(today); 


let birthday = new Date('06/22/1992');
birthday = new Date('June 22, 1992');
birthday = new Date('6-22-92 6:30:23');

// Get Methods
val = today.getMonth();             // 0 based
val = today.getDate();              // 1-31
val = today.getDay();               // 0 based
val = today.getFullYear();          // 2019  
val = today.getHours();             // 24 hours format
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();              // get timestamp

// Set Methods
birthday.setMonth(6);
birthday.setDate(18);
birthday.setFullYear(1993);
birthday.setHours(3);
birthday.setMinutes(45);
birthday.setSeconds(33);

console.log(birthday);