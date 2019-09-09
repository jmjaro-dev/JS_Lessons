document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  e.preventDefault();

  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';
      
      // CHECK USER INPUT
      if(number > 1) {         // Check if input is greater than 1
        output += '<h2 class="center-align">Jokes</h2><ul class="collection">';
      } else if (number == 1){ // Check if input is 1
        output += '<h2 class="center-align">Joke</h2><ul class="collection">';
      } else {                 // Check if input is empty or less than 1
        // Check if input is empty | If input less than 1 then DO NOTHING
        if(number == '') {
          output += '<h2 class="center-align">Encountered an error :(</h2><ul class="collection">';
        }
      }

      if(response.type === 'success' && number !== '' && number > 0) {
        // LOOP THROUGH EACH JOKE
        response.value.forEach(function(joke, index) {
          // STRIPE EFFECT

          // Check if index is ODD or EVEN 
          if(index % 2 == 0)
          {
            // If EVEN, Set li background to light blue
            output += `<li class="collection-item blue lighten-4">${joke.joke}</li>`;
          } else {
            // If ODD, Set li background to light blue
            output += `<li class="collection-item grey lighten-4">${joke.joke}</li>`;
          }
        });
      } else {
        // If user input is null | If input is less than 0 then DO NOTHING
        if(number == '') {
          output += '<li class="collection-item red lighten-4">Something went wrong. Please try again later.</li>';
        }
      }
      document.querySelector('.jokes').innerHTML = `${output} </ul>`;
    }  
  }

  xhr.send();
}