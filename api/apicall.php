<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

header('Content-Type: application/json');

define('DB_HOST','127.0.0.1');
define('DB_USERNAME','root');
define('DB_PASSWORD','root');
define('DB_NAME','teams');

$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
    #die("connection failed: ".$mysqli->error);
    echo("Conn failed") ;
}

$query = sprintf("SELECT team, matchs, score FROM cric ORDER BY matchs");

$result = $mysqli->query($query);

$data = array();

foreach ($result as $row) {
    $data[] = $row;
}

$result->close();
 
$mysqli->close();

print json_encode($data);

?>