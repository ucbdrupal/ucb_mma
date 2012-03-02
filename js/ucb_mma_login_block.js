/*
 *  It's best practice to wrap your code in a closure. A closure is nothing more than a function that helps limit the scope
 *  of variables so you don't accidentally overwrite global variables. http://drewish.com/content/2011/05/drupal_javascripting
 */
(function ($) {
  // Store our function as a property of Drupal.behaviors.
  Drupal.behaviors.mmaLoginJs= function (context) {
	  function getCookie(c_name)
	  {
	  var i,x,y,ARRcookies=document.cookie.split(";");
	  for (i=0;i<ARRcookies.length;i++)
	    {
	    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	    x=x.replace(/^\s+|\s+$/g,"");
	    if (x==c_name)
	      {
	      return unescape(y);
	      }
	    }
	  }
    // TODO: cookies/js enabled?
	// check cookie $.cookie("mma_method")
	  var ck = "";
	  var ck = getCookie("mma_method");
	  var method = "";
	  var links = "";

	  switch (ck) { 
        case "0" : 
          method = "CAS"
          break; 
        case "1" : 
          method = "Standard"
          links = '<div class="item-list"><ul><li class="first"><a href="/user/register" title="Create a new user account.">Create new account</a></li><li class="last"><a href="/user/password" title="Request new password via e-mail.">Request new password</a></li></ul></div>';
          break;
	  }

	  // /user?reset select the current method
	  $("#edit-mma-method-" + ck).attr("checked", true);          

	  // if /user?reset, show default Choose form
	  var url = document.location.toString();
	  var reset = url.match(/\?(reset)/);
	  //var change = null;
	  if (reset !== null) {
        ck = null;
      }
	  
	  
	  // Display correct block form
	  $("#block-ucb_mma-0").find(".content").html(Drupal.settings.ucb_mma[ck]);	
	  //block: standard description
	  $("#block-ucb_mma-0").find("#edit-submit-1").after('<div class="description">Your login method is ' + method + ' <a href="/mma/help">Change?</a></div>');

	  // Display correct user form
	  $("#ucb_mma-login").html(Drupal.settings.ucb_mma[ck]);
	  //user form: standard description
	  $("#ucb_mma-login").find("#edit-submit-1").after('<div class="description">Your login method is ' + method + ' <a href="/mma/help">Change?</a>');

	  //CAS block description
	  $("#cas-login-block").find(".description").html("Your login method is " + method + ' <a href="/mma/help">Change?</a>');	
  };
}(jQuery));
