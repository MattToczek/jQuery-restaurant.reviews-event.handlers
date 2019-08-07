// 1. Show the hidden restaurant review, or use an animation method to reveal it.
$('.review').show();
// 2. Set the title of the hidden restaurant review to a different name -- whatever you'd like.
$('.review h3').text('Dems Dawgs');
// 3. Change the text of the hidden restaurant review. The review should contain HTML, such as a strong tag or a span element.
$('.review p').html('Deez are de <strong>Best</strong> Dawgs I ever did ates');
// 4. Change the name of the app. Change *only* the text inside the span element within the h1.
$('h1 span').text("Matty-Pops'  ");
// 5. Create an animation for the paragraph with the id of "flashMessage." Chain an animation that
$('#flashMessage')

  .slideDown(1000)
  // slides the message down for 1 second
  .delay(2000)
  // delays the message for 2 seconds
  .slideUp(1000)
  // slides the message up for 1 second

// 6. Inside the click handler, create a working restaurant review form.
$('#submitBtn').click(function(){
  let resName = $('#restaurantNameInput').val();
  let resReview = $('#restaurantReviewInput').val();
  //  a. Use the val() method to get what's been entered into the restaurant name and restaurant review form input fields. Save both values to variables.

  $('#newRestaurant h3').text(resName);
  //  b. Insert the restaurant name value into the #newRestaurant h3 tag
  $('#newRestaurant p').text(resReview);
  //  c. Insert the restaurant review value into the #newRestaurant paragraph tag
});
