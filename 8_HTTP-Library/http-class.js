// EasyHTTP Library

class EasyHTTP {
  // Make a HTTP GET Request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make a HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, 
        {
          // setRequestHeader equivalent
          method: 'POST', 
          headers: {
            'Content-type': 'application/json'
          },
          // Convert data to JSON String
          body: JSON.stringify(data)
        })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make a HTTP PUT/UPDATE Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, 
        {
          // setRequestHeader equivalent
          method: 'PUT', 
          headers: {
            'Content-type': 'application/json'
          },
          // Convert data to JSON String
          body: JSON.stringify(data)
        })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make a HTTP DELETE Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, 
      {
        // setRequestHeader equivalent
        method: 'DELETE', 
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(_ => resolve('User Deleted...'))
      .catch(err => reject(err));
    });
  }
}