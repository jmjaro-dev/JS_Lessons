// Init Github class
const github = new Github();
// Init UI class
const ui = new UI();

// Search input
const searchUser = document.querySelector('#searchUser');

// searchUser event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // Make HTTP call
    github.getUser(userText)
    .then(data => {
      // Check the user data
      if(data.profile.message === 'Not Found') {
        // show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // show profile
        ui.showProfile(data.profile);

        // show repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});