/*
  GAME FUNCTION:
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Notify player of guess remaining
  - Notify the player of the correct answer if lose
  - Let Player choose to play again
*/

// Game Values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// set minNum and maxNum span
minNum.textContent = min;
maxNum.textContent = max;

// Play again Event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'btn play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click',function() {
  let guess = parseInt(guessInput.value);

  // validate user input
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else {
    // Check if player won
    if(guess === winningNum) {
      // Game Over - Won
      gameOver(true, `${winningNum} is correct, You Win!`)
    } else {
      // Wrong Number
      guessesLeft -= 1;
      if(guessesLeft === 0) {
        gameOver(false, `Game Over, you Lose. The correct number was ${winningNum}.`);
      } else {
        // Game Continues - Wrong answer

        // Change Border Color
        guessInput.style.borderColor = 'red';
        // Clear Input
        guessInput.value = '';
        //
        setMessage(`${guess} is not correct. ${guessesLeft} guesses left.`, 'red');
      }
    }  
  }   

  
});

// setMessage Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// gameOver Function
function gameOver(won, msg) {
  let color;
  // check if won is true / false (win or lose)
  won === true ? color = 'green' : color = 'red';
  // Disable Input
  guessInput.disabled = true;
  // Change Border Color
  guessInput.style.borderColor = color;
  // Set text color
  message.style.color = color;
  // Set message
  setMessage(msg, color);
  // Play Again?
  guessBtn.value = 'Play Again';
  guessBtn.className += ' play-again'; 
}

function getRandomNum(min, max) {
  // return the generated random number
  return Math.floor(Math.random() * (max - min + 1) + min);
}
