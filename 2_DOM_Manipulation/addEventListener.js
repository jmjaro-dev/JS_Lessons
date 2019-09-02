// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('Clear Button Clicked');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // TimeStamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
