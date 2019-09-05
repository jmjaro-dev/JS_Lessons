// ES6 Conversion
import { Book, UI } from './modelES6.js';

// Event Listeners

// Submit Event
document.querySelector('#book-form').addEventListener('submit', function(e) {
  // prevent default
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  // Instantiate Book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if(title === '' || author === '' || isbn === '') {
    // Error Alert
      ui.showAlert('Please fill in all fields.', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    
    // Success Alert
    ui.showAlert('Book Added.', 'success');

    // Clear fields after adding a book
    ui.clearFields();
  }
});

// Delete Book event listener
document.querySelector('#book-list').addEventListener('click', function(e) {
  // Instantiate UI
  const ui = new UI();

  // Invoke deleteBook Prototype
  ui.deleteBook(e.target);

  // Show success
  ui.showAlert('Book Removed', 'success');
  

  e.preventDefault();
});
