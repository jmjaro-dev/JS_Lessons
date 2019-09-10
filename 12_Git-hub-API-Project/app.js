// Init Github class
const github = new Github();

// Search input
const searchUser = document.querySelector('#searchUser');

// searchUser event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make HTTP call
    console.log(userText);
  }
});