ucb_mma-6.x
===========

TABLE OF CONTENTS
-----------------
1.   Purpose
2.   Requirements
3.   Standard configuration applied by this module
4.   Configuration options for the administrator
4.1    Mixed Mode Login block
4.2    Other login blocks
4.3    User registration settings

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

STANDARD CONFIGURATION APPLIED BY THIS MODULE
---------------------------------------------

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

CONFIGURATION OPTIONS FOR THE ADMINISTRATOR
-------------------------------------------

*Mixed Mode Login Block*

The Mixed Mode Login block is disabled by default.  With this block
disabled a user can register for an account at /user/register and they
can login at /user. 

Enabling the block provides a block similar to the standard User Login
block which uses the MMA logic to keep the user in the correct
"authentication channel."

Enable or disable the block at /admin/build/blocks.

*Other login blocks*

Other modules (e.g. User and CAS) provide login blocks that may be
enabled on your site. It is best to only present the Mixed Mode Login
block to the user.  During installation ucb_mma will alert you if
other login blocks are enabled.

*User registration settings*

During installation ucb_mma will check your user registration settings
and alert you if you should consider changing your settings.

It's often best not to use the setting "Only site administrators can
create new user accounts" at /admin/user/settings. When a brand new
user comes to your site we don't know if they will want to login using
CAS or standard Drupal authentication. If the user is allowed to
create their own account (you can require administrator approval) then
their account will always be created using the process appropriate for
the user-selected authetication method.

Alternatively you can require site administrators to create all
accounts manually. The administrator will need to take care that they
create CAS accounts for CAS users and standard accounts for standard
users.  (The cas_attributes module (included in the ucb_cas module)
provides a "create CAS user" function.) For more on allowing users to
create accounts, proper role assignation, see the ucb_cas README.
