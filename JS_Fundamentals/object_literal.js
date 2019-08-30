// OBJECT LITERAL
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Pasay',
    street: 'Traffic'
  },
  getBirthYear: function () {
    return 2019 - this.age;
  }
};

let val;

val = person;

// Get Specific Values
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.hobbies[1];
val = person.address.city;
val = person.address.street;
val = person.getBirthYear();

console.log(val);

const people = [{name: 'John', age: 30}, {name: 'James', age: 22}, {name: 'Heide', age: 24}];

for(let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
