// OBJECT.CREATE

// Person Prototype
const personPrototype = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    return `Hello there ${this.firstName} ${this.lastName = newLastName}`;
  }
}

const mary = Object.create(personPrototype);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 36;
mary.getsMarried('Star');

console.log(mary);

const jerome = Object.create(personPrototype, {
  firstName: {value: 'Jerome'},
  lastName: {value: 'Jaropojop'},
  age: {value: 27}
});

console.log(jerome);
console.log(jerome.getsMarried('McGregor'));