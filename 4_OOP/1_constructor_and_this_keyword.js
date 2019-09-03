// // Object Literal
// const person = {
//   name: 'jerome'
// };

// console.log(person.name);

// // Sample Person constructor
// function Person(name) {
//   this.name = 'Jerome';
// }

// const jerome = new Person();
// const bob = new Person();
// console.log(bob);

// // Sample Person Constructor with Parameters
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const jerome = new Person('Jerome', 27);
// const bob = new Person('Bob', 36);

// console.log(bob);

// CONSTRUCTOR AND this KEYWORD
// Person Constructor
function Person(name, dob) { 
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const jerome = new Person('Jerome', 'June 22, 1992');

console.log(jerome.calculateAge());


