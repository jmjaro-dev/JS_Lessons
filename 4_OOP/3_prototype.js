// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// calculateAge prototype
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// getFullName prototype
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// getsMarried prototype
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('John', 'Doe', 'June 22, 1992');
const jane = new Person('Jane', 'Doe', 'June 1, 1995');

// console.log(john.calculateAge());
console.log(jane.getFullName());
// sets the newLastName parameter to update the lastName
jane.getsMarried('Ferrer');
// display the updated lastName
console.log(jane.getFullName());

console.log(jane.hasOwnProperty('firstName'));
console.log(jane.hasOwnProperty('getFullName'));