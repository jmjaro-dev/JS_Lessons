// ES6 Promises

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

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;
      
      if(!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}
  
function getPosts() {
  setTimeout(function() {
    let output = '<ul class="collection">';
    
    posts.forEach(function(post) {
      output += `<li class="collection-item">${post.title}</li> <li class="collection-item">${post.body}</li>`;
    });
    document.querySelector('#posts').innerHTML = `${output} </ul>`;
  },1000);
}

createPost({title: 'Post Three', body: 'This is post Three'})
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
