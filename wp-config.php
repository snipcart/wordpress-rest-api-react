<?php

// domain name
if($_SERVER['HTTP_HOST']) {
	define( 'WP_HOME', 'https://'.$_SERVER['HTTP_HOST'] );
	define( 'WP_SITEURL', 'https://'.$_SERVER['HTTP_HOST'] );
}


// Sendgrid settings - Read in the sendgrid auth from the config //
define('SENDGRID_USERNAME', $_ENV["SENDGRID_USERNAME"]);
define('SENDGRID_PASSWORD', $_ENV["SENDGRID_PASSWORD"]); 
  
// S3 Config Info - read the S3 Access Keys from the config //
define('AWS_ACCESS_KEY_ID', $_ENV["AWS_ACCESS_KEY_ID"]);
define('AWS_SECRET_ACCESS_KEY', $_ENV["AWS_SECRET_ACCESS_KEY"]); 

// ** ClearDB settings - from Heroku Environment ** //
$db = parse_url($_ENV["CLEARDB_DATABASE_URL"]); 

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', trim($db["path"],"/"));

/** MySQL database username */
define('DB_USER', $db["user"]);

/** MySQL database password */
define('DB_PASSWORD', $db["pass"]);

/** MySQL hostname */
define('DB_HOST', $db["host"]);

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define('AUTH_KEY',         $_ENV["AUTH_KEY"]);
define('SECURE_AUTH_KEY',  $_ENV["SECURE_AUTH_KEY"]);
define('LOGGED_IN_KEY',    $_ENV["LOGGED_IN_KEY"]);
define('NONCE_KEY',        $_ENV["NONCE_KEY"]);
define('AUTH_SALT',        $_ENV["AUTH_SALT"]);
define('SECURE_AUTH_SALT', $_ENV["SECURE_AUTH_SALT"]);
define('LOGGED_IN_SALT',   $_ENV["LOGGED_IN_SALT"]);
define('NONCE_SALT',       $_ENV["NONCE_SALT"]);

$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
