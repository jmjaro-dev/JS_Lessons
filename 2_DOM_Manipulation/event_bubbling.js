// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click', function(e){
//   console.log('card title ');
// });

// document.querySelector('.card-content').addEventListener('click', function(e){
//   console.log('card content ');
// });

// document.querySelector('.card').addEventListener('click', function(e){
//   console.log('card ');
// });

// EVENT DELIGATION
const delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  e.preventDefault();
  if(e.target.parentElement.className === 'delete-item secondary-content'){
    console.log('item deleted');
  }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('item deleted');
    e.target.parentElement.parentElement.remove();
  }
}

// // // test
// const Items = document.querySelector('.collection');
// // // test function
// Items.addEventListener('click',function(e){
//   e.preventDefault();
//   if(e.target.className === 'fa fa-remove') {
//     console.log('item deleted');
//     e.target.parentElement.parentElement.remove();
//   }
// });

