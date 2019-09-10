// ES6 Conversion
import { Book, UI, Store } from './modelES6.js';

// EVENT LISTENERS

// DOM Load Event - Executes displaybooks() method of Store Class when web finished loading
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Submit Event
document.querySelector('#book-form').addEventListener('submit', e => {
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
    
    // Add book to Local Storage
    Store.addBook(book);

    // Success Alert
    ui.showAlert('Book Added.', 'success');

    // Clear fields after adding a book
    ui.clearFields();
  }
});

// Delete Book event listener
document.querySelector('#book-list').addEventListener('click', e => {
  // prevent default
  e.preventDefault();
  // Instantiate UI
  const ui = new UI();

  // Invoke deleteBook Prototype
  ui.deleteBook(e.target);

  // Remove book from Local Storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success
  ui.showAlert('Book Removed', 'success');
});
