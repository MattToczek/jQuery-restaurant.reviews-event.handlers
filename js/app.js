// 1. Hide/show the text inside the #helpText span element when the user's mouse
//passes over the text "How are these ranked?" (Hint: use the jQuery toggle() method)
$('#helpText').on('mouseover', function(event){
  $(this).children(0).toggle('display(auto)');
})

// 2. Append a new restaurant to the restaurant list when the user enters a
//value into the #newRestaurant input and clicks on the #addNew button.
$('#addNew').on('click', function(event){
  let newLi = '<li>' + $('#newRestaurantInput').val() + '</li>';
  console.log($('#newRestaurantInput.value'));
  $('ul').append(newLi);
// $('#helpText').next().append($('#newRestaurantInput').val());
})

  // BONUS: Before appending the new restaurant to the list, use string
  //concatentation to make sure the new restaurant name is surrounded by an opening and closing <li> tag.

// 3. Add the class "strike" to the restaurant name each time it's double
//clicked. Use event delegation on the ul element to listen for a click event
//on the ul's list items
$('ul').on('dblclick', 'li', function(event){
  $(this).toggleClass('strike');
})

//BONUS: Refactor challenge 3 using the "this" keyword.
//BONUS: Look up a jQuery method that will let you toggle the .strike class
//on and off.
