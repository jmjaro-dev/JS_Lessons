const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

// KeyPress Events
// taskInput.addEventListener('keydown', runEvent);
// taskInput.addEventListener('keyup', runEvent);
// taskInput.addEventListener('keypress', runEvent);
// taskInput.addEventListener('focus', runEvent);
// taskInput.addEventListener('blur', runEvent);
// taskInput.addEventListener('cut', runEvent);
// taskInput.addEventListener('paste', runEvent);
// taskInput.addEventListener('copy', runEvent);
// taskInput.addEventListener('input', runEvent);
taskInput.addEventListener('change', runEvent);


function runEvent(e) {
  // e.preventDefault();
  console.log(`Event Type: ${e.type}`);
  console.log(`Event Type: ${e.target.value}`);

  heading.innerText = e.target.value;

  // Get input value
  console.log(taskInput.value);
}
