// PROTOTYPE INHERITANCE
// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting Prototype
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}!`;
}

const person1 = new Person('Patrick', 'Star');

console.log(person1);

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  // Inherit the firstName and lastName property of Person Constructor
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the greeting Prototype Method of Person Constructor
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return Customer
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer('Patrick', 'Star', '555-0002-000', 'Standard');

// greeting prototype of Customer Constructor 
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}! \nWelcome to our company!`;
}

console.log(customer1);