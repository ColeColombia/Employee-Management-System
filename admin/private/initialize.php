
<?php

define("APP_ROOT", dirname(dirname(__FILE__)));
define("PRIVATE_PATH", APP_ROOT . "/private");
define("PUBLIC_PATH", APP_ROOT . "/public");

require_once(PRIVATE_PATH . "/admin.php");
require_once(PRIVATE_PATH . "/database.php");
require_once(PRIVATE_PATH . "/crud.php");
require_once(PRIVATE_PATH . "/userRegistration.php");

 ?>
