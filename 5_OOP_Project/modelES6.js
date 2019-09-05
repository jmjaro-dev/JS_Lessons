// Book Constructor
export class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Constructor
export class UI {
  // Add Book To List
  addBookToList(book) {
    const list = document.querySelector('#book-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert columns
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td> 
        <a href="#" class="delete red-text">x</a> 
      </td>
    `;
    // Insert row to List (tbody)
    list.appendChild(row);
  }

  // Show Alert
  showAlert(message, className) {
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
  deleteBook(target) {
    if(target.className === 'delete red-text') {
      target.parentElement.parentElement.remove();
    }
  }

  // Clear Fields
  clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Local Storage Class
export class Store {
  // static getBooks() method
  static getBooks() {
    let books;
    // check if 'books' in Local Storage is empty 
    if(localStorage.getItem('books') === null) {
      // Set an empty array of books
      books = [];
    } else {
      // Convert the 'books' JSON string to array
      books = JSON.parse(localStorage.getItem('books'));
    }
    // returns the books as an array
    return books;
  }

  // static displayBooks() method
  static displayBooks() {
    // Get the books array from Local Storage
    const books = Store.getBooks();

    // Iterate through the books array
    books.forEach(function(book) {
      // Instantiate UI
      const ui = new UI();
      // Add Book to UI
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
    // Get the books array from Local Storage
    const books = Store.getBooks();

    // Iterate through the books array
    books.forEach(function(book, index) {
      // Compare if 'isbn' of the current book/item matched the 'isbn' in the parameter
      if(book.isbn === isbn) {
        // removes the book/item in books array 
        books.splice(index, 1);
      }
    });
    // Returns the updated value of the books array to Local Storage
    localStorage.setItem('books', JSON.stringify(books));
  }
}