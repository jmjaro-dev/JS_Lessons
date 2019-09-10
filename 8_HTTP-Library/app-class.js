const http = new EasyHTTP;

// GET users
http.get('http://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));


// Create user 
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

// POST/ADD user
http.post('http://jsonplaceholder.typicode.com/users', user1)
.then(data => console.log(data))
.catch(err => console.log(err));

const input = document.querySelector('#input');

input.addEventListener('keyup', _ =>
{
  // PUT/UPDATE user
  http.put(`https://jsonplaceholder.typicode.com/posts/${input.value}`, user2)
  .then(data => console.log(data))
  .catch(err => console.log(err));
});

// DELETE user
http.delete('https://jsonplaceholder.typicode.com/posts/2')
.then(data => console.log(data))
.catch(err => console.log(err));

