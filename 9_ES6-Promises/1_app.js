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

const createPost = post => {
  return new Promise((resolve, reject) => {
    setTimeout(_ => {
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
  
const getPosts = _ => {
  setTimeout(() => {
    let output = '<ul class="collection">';
    
    posts.forEach(post => {
      output += `<li class="collection-item">${post.title}</li> <li class="collection-item">${post.body}</li>`;
    });
    document.querySelector('#posts').innerHTML = `${output} </ul>`;
  },1000);
}

createPost({title: 'Post Three', body: 'This is post Three'})
  .then(getPosts)
  .catch(err => console.log(err));
