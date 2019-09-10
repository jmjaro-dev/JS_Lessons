// Get Local Text File data
const getText = _ => {
  fetch('./9_ES6-Promises/test.txt')
    .then(res => res.text())
    .then(data => document.querySelector('#output').innerHTML = data)
    .catch(err => console.log(err));
}

// Get JSON
const getJSON = _ => {
  fetch('./9_ES6-Promises/posts.json')
    .then(res => res.json())
    .then(data => {
      
      let output = '';
      
      data.forEach((post, index) => {
        output += `
        <ul class="collection card">
          <li class="collection-item green darken-4 white-text center-align">POST ${index+1}</li> 
          <li class="collection-item"><b>Title</b>: ${post.title}</li> 
          <li class="collection-item"><b>Body</b>:${post.body}</li>
        </ul>`;
      });
      
      document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get from external API
const getExternal = _ => {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      
      let output = '';
      
      data.forEach(user => {
        output += `
        <ul class="collection card">
          <li class="collection-item indigo white-text center-align"><b>USER ${user.id}</b></li> 
          <li class="collection-item"><b>username</b>: ${user.login}</li> 
        </ul>`;
      });
      
      document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// LISTENERS
document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON);
document.querySelector('#button3').addEventListener('click', getExternal);

