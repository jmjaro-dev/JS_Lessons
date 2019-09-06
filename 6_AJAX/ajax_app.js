document.querySelector('#button1').addEventListener('click', loadCustomer);
// document.querySelector('#button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open('GET', '6_AJAX/customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
      console.log(this.responseText);
    }
  }

  xhr.send();
}