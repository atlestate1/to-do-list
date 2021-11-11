//Code to add a new item//

function newItem() {

  let li = $('<li></li>');
  let inputValue = $('#input').val()
  li.append(inputValue);

  if (inputValue === '') {
    alert('Please write something!')
  } else {
    $('#list').append(li)
  }

  //Code to cross out item by double clicking//

  function crossOut() {
    li.classList.toggle('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  let crossOutButton = $('<crossOutButton></crossOutButton>');
   crossOutButton.append(document.createTextNode('X'));
   li.append(crossOutButton);

//Code to delete item//
  function deleteListItem() {
    li.addClass('delete');
  }
  //Code to reorder items//
  $('#list').sortable();
}
