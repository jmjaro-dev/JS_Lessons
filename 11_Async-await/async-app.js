const http = new EasyHTTP;

// ? GET Users
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));

// ? Create user 
const user1 = {
  name: "John Doe", 
  username: 'johndoe',
  email: "johndoe@gmail.com",
};

const user2 = {
  name: "Jane Doe", 
  username: 'janedoe',
  email: "janedoe@gmail.com",
};

// ? POST/ADD Users
http.post('https://jsonplaceholder.typicode.com/users', user1)
.then(data => console.log(data))
.catch(err => console.log(err));

const input = document.querySelector('#input');

input.addEventListener('keyup', _ =>
{
  // ? PUT/UPDATE Users
  http.put(`https://jsonplaceholder.typicode.com/users/${input.value}`, user1)
  .then(data => console.log(data))
  .catch(err => console.log(err));

});

// ? DELETE Users
http.delete('https://jsonplaceholder.typicode.com/users/3')
.then(res => console.log(res))
.catch(err => console.log(err));