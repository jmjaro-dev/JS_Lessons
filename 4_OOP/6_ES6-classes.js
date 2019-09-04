// ES6 Classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  // greeting Prototype/Method
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}!`;
  }
  // calculateAge Prototype/Method
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  // getsMarried Prototype/Method
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  // Static Prototypes/Methods
  static addNumbers(x, y) {
    return x + y;
  }
}

const patrick = new Person('Patrick', 'Star', '07-20-1998');

patrick.getsMarried('Silver');

console.log(patrick);
console.log(patrick.calculateAge());
// how to invoke static prototype addNumbers
console.log(Person.addNumbers(10, 21));