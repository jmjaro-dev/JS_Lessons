// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book) {
  const list = document.querySelector('#book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert columns
  row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
    <td> ${book.isbn} </td>
    <td> 
      <a href="#" class="delete red-text">x</a> 
    </td>
  `;
  // Insert row to List (tbody)
  list.appendChild(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add Class
  div.className = `alert ${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get Parent
  const container = document.querySelector('.container');
  // Get Form
  const form = document.querySelector('#book-form');
  // Insert Alert
  container.insertBefore(div, form);

  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete red-text') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#isbn').value = '';
}

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
