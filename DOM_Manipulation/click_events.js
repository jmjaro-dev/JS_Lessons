// DOM Queries
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click Events
// clearBtn.addEventListener('click', runEvent);
// clearBtn.addEventListener('mouseenter', runEvent);
// clearBtn.addEventListener('mouseleave', runEvent);
// clearBtn.addEventListener('mouseover', runEvent);
// clearBtn.addEventListener('mouseout', runEvent);
clearBtn.addEventListener('mousemove', runEvent);

function runEvent(e){
  console.log(`Event Type: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY}, 40)`;
  e.target.posi
}