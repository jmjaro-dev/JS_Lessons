// FUNCTION DECLARATIONS
function greet(firstName = 'John', lastName = 'Doe') {
  // if(typeof firstName === 'undefined') {
  //   firstName = 'John';
  // }

  // if(typeof lastName === 'undefined') {
  //   lastName = 'Doe';
  // }

  console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());

// FUNCTION EXPRESSION
const square = function(x = 3) {
  return x * x;
}

console.log(square(5));

// IMMEDIATELY INVOKEABLE FUNCTION EXPRESSIONS = IIFEs 
(function() {
  console.log('IFFE Ran...');
})();

(function(name){
  console.log('Hello ' + name);
})('Jerome');


// Property Method
const todo = {
  add: function(){

  }
}