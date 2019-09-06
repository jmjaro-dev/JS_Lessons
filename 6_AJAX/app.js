document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
  // create an XHR Object
  const xhr = new XMLHttpRequest();

  console.log('ReadyState', xhr.readyState);

  // Open
  xhr.open('GET', '6_AJAX/data.txt', true);

  xhr.onreadystatechange = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    } 
    
  }
  // handle xhr error
  xhr.onerror(function() {
      console.log('Request Error');
  })

  // Send xhr Request
  xhr.send();

  // readyState values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
}