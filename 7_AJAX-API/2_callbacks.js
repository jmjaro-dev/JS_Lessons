// CALLBACK FUNCTION

// Callback Function Concept
// const posts = [
//   {
//     title: 'Post One', 
//     body: 'This is post One'
//   },
//   {
//     title: 'Post Two', 
//     body: 'This is post Two'
//   }
// ];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
    
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li> <li>${post.body}</li>`;
//     });
//     document.body.innerHTML = output;
//   },1000);
// }

// createPost({title: 'Post Three', body: 'This is post Three'});

// getPosts();


const posts = [
  {
    title: 'Post One', 
    body: 'This is post One'
  },
  {
    title: 'Post Two', 
    body: 'This is post Two'
  }
];


const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
  
const getPosts = () => {
  setTimeout(() => {
    let output = '';
    
    posts.forEach(post => output += `<li>${post.title}</li> <li>${post.body}</li>`);
    document.body.innerHTML = output;
  },1000);
}

createPost({title: 'Post Three', body: 'This is post Three'}, getPosts);

getPosts();