document.querySelector('#button1').addEventListener('click', loadCustomer);
document.querySelector('#button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer(e) {
  e.preventDefault();

  // Instantiates an XMLHttpRequest Object to xhr
  const xhr = new XMLHttpRequest();

  // Opens a XMLHttpRequest
  xhr.open('GET', '6_AJAX/customer.json', true);

  // Executes a function when json file is retrieved/loaded
  xhr.onload = function() {
    // Check if the XMLHttpRequest status is OK
    if(this.status === 200) {
      // Assigns the parsed responseText to 'customer' variable
      const customer = JSON.parse(this.responseText);
      
      // Creates a template string for 'customer'
      const output = `
          <div class="collection">
            <div class="collection-item blue lighten-4" ><b>ID</b>: ${customer.id}</div>
            <div class="collection-item grey lighten-4"><b>Name</b>: ${customer.name}</div>
            <div class="collection-item blue lighten-4" ><b>Company</b>: ${customer.company}</div>
            <div class="collection-item grey lighten-4"><b>Phone</b>: ${customer.phone}</div>
          </div>
        `;

      // Displays output to 'customer' div
      document.querySelector('#customer').innerHTML = output;
    }
  }
  // Sends the XMLHttpRequest
  xhr.send();
}

function loadCustomers(e) {
  e.preventDefault();

  // Instantiates an XMLHttpRequest Object to xhr
  const xhr = new XMLHttpRequest();

  // Opens a XMLHttpRequest
  xhr.open('GET', '6_AJAX/customers.json', true);
  
  // Executes a function when JSON file is retrieved/loaded
  xhr.onload = function() {
    // Check if the XMLHttpRequest status is OK
    if(this.status === 200) {
      // Assigns the parsed responseText to 'customers' variable
      const customers = JSON.parse(this.responseText);
      let output = '';

      // Iterates through the customers array of objects and creates a template string for each customer
      customers.forEach(function(customer) {
        output += `
          <div class="collection">
            <div class="collection-item blue lighten-4" ><b>ID</b>: ${customer.id}</div>
            <div class="collection-item grey lighten-4"><b>Name</b>: ${customer.name}</div>
            <div class="collection-item blue lighten-4" ><b>Company</b>: ${customer.company}</div>
            <div class="collection-item grey lighten-4"><b>Phone</b>: ${customer.phone}</div>
          </div>
        `;

        // Appends output value to customers div
        document.querySelector('#customers').innerHTML = output;
      });
    }
  }

  xhr.send();
}