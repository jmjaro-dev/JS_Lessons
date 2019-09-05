// ES6 Conversion
import { Book, UI } from './modelES6.js';

// Local Storage Class
class Store {
  // static getBooks() method
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    
    return books;
  }

  // static displayBooks() method
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function(book) {
      // Instantiate UI
      const ui = new UI();
      // Add Book to  UI
      ui.addBookToList(book);
    });
  }

  // static addBook() method
  static addBook(book) {
    // Set books to an array of books from local storage
    const books = Store.getBooks();
    // Push/Add book to books array
    books.push(book);
    // Add book to Local Storage
    localStorage.setItem('books', JSON.stringify(books));
  }
  
  // static removeBook() method
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach(function(book, index) {
      if(book.isbn === isbn) {
        console.log('deleted');
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}


// EVENT LISTENERS

// DOM Load Event - Executes displaybooks() method of Store Class when web finished loading
document.addEventListener('DOMContentLoaded', Store.displayBooks);


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
    
    // Add book to Local Storage
    Store.addBook(book);

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

  // Remove book from Local Storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show success
  ui.showAlert('Book Removed', 'success');
  

  e.preventDefault();
});
