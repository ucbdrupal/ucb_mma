/*
 *  It's best practice to wrap your code in a closure. A closure is nothing more than a function that helps limit the scope
 *  of variables so you don't accidentally overwrite global variables. http://drewish.com/content/2011/05/drupal_javascripting
 */
(function ($) {
  // Store our function as a property of Drupal.behaviors.
  Drupal.behaviors.mixedModeAuth= function (context) {
    var editNameWrapper = $('#edit-name-wrapper').replaceWith('<!-- edit-name-wrapper removed by mixed_mode_auth.module -->');
    var editPassWrapper = $('#edit-pass-wrapper').replaceWith('<!-- edit-pass-wrapper removed by mixed_mode_auth.module -->');
    var submitButton = $('#edit-submit').replaceWith('<input type="button" name="next" id="edit-button" value="Next" class="form-submit">');
    
    //Disable enter key on email field to prevent form validation errors
    $('#edit-email').keypress(function(e){
        if ( e.which == 13 ){
            //$('#edit-button').focus();  //Use whatever selector necessary to focus the 'next' input
        	return false;
        }
    });
    //Add Next button
    //$('#edit-email-wrapper').append('<input type="button" name="next" id="edit-button" value="Next" class="form-submit">');
    $('#edit-button').click(function() {
      //validate email 
      var email = $('#edit-email').val().match(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}/);    	
      //domain match
      var domain = $('#edit-email').val().match(/.*(@berkeley.edu{0,1}|@[-A-Za-z0-9_.]*[.]{1}berkeley.edu)$/i);
      
      if (email == null) {
        alert("Please enter a valid email address.")
      }
      else if (domain == null) {
        $('#edit-email-wrapper').after(editPassWrapper);
      } 
      else {
    	//the domain matched
    	window.location = Drupal.settings.mma.cas_uri;
      }
    });
  };
}(jQuery));
