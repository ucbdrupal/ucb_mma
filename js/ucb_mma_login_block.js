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
    //TODO: cookies/js enabled?
	//check cookie $.cookie("mma_method")
	  var ck = getCookie("mma_method");
	  $("#block-ucb_mma-0").children(".content").html(Drupal.settings.ucb_mma[ck]);	
	  $("#ucb_mma-login").html(Drupal.settings.ucb_mma[ck]);
  };
}(jQuery));
