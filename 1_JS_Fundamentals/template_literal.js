const name = 'John';
const age = 31;
const job = 'Web Developer';
const city = 'Pasay';

let html;

// Without template string (ES5)
// html = 
// '<ul><li> Name: ' + 
// name +
// '</li><li> Age: ' + 
// age +
// '</li><li> Job: ' + 
// job + 
// '</li><li> City: ' +
// city + '</li></ul>'; 

// With Template String (ES6)


function hello(){
  return 'Hello World';
}

html = `
  <ul>
    <li> Name: ${name} </li>
    <li> Age: ${age} </li>
    <li> Job: ${job} </li>
    <li> City: ${city} </li>
    <li> ${2 + 2} </li>
    <li> ${hello()} </li>
    <li> ${age > 30 ? 'Over 30' : 'Under 30'} </li>
  </ul>
`;




// document.body.innerHTML = html;
document.write(html);