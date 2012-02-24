ucb_mma-6.x
===========

TABLE OF CONTENTS
-----------------
1.   Purpose
2.   Requirements
3.   Standard Configuration

PURPOSE
-------

Mixed Mode Authentication (mma) facilitates allowing users multiple
authentication mechanisms to login to a site.  They can either use
Drupal's standard authentication or a different mechanism like
CAS. The module alters the registration form and the login form to
present sauthentication options.  The module sets a cookie to
facilitate keeping the user in just one "authentication channel" or
the other.

REQUIREMENTS
------------

UCB MMA requires that the CAS module (http://drupal.org/project/cas)
is installed on the site. UC Berkeley sites can satisfy this
requirement by installing the UCB CAS module which installs and
configures everything needed to use UC Berkeley's CAS server.

STANDARD CONFIGURATION
----------------------

The CAS module might be configured to override Drupal's standard user
login form.  If you are using UCB MMA, this setting is
undesirable. During installation UCB MMA will check this CAS setting
and modify it if needed. If this happens you will see this message:

  UCB MMA has changed your CAS configuation to "Do not add link to login
  forms" at /admin/user/cas > Login Form

(Really this CAS setting should be called "Do not override the Drupal
login form," we should mention this to the CAS maintainer.)

Why is this change needed? UCB MMA makes it possible for users
to use either Drupal's standard authentication or CAS authentication
when they login to the site.  If the user chooses "Drupal Standard"
but the CAS module is overriding Drupal's standard login form, the
user will not be able to login.

If you enable UCB CAS after you enable UCB MMA, UCB CAS will detect
UCB MMA's presence and will not override the Drupal login form.
