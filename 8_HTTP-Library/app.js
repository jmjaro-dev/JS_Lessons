const http = new EasyHTTP();

// GET Posts
http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Create Data

const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, (err, post) => {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});


const input = document.querySelector('#input');

input.addEventListener('keyup', () =>
{
  // Update Post
  http.put(`https://jsonplaceholder.typicode.com/posts/${input.value}`, data, (err, post) => {
    if(err) {
      console.log(err);
    } else {
      console.log(post);
    }
  });
});


// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/232', (err, response) => {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});