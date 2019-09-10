// function myFunc() {
//     return 'Hello';
// }

// console.log(myFunc());

// async function myFunc() {
//     return 'Hello';
// }

// console.log(myFunc());

async function myFunc() {
  const promise = new Promise((resolve, reject) => {
      setTimeout(_ => resolve('hello'), 2000);
  });

  const error = false;
  if(!error) {
    const res = await promise; // Wait until promise is resolved
    return res;
  } else {
      await Promise.reject(new Error('Something went wrong'));
  }
}

myFunc()
.then(res => console.log(res))
.catch(err => console.log(err));
