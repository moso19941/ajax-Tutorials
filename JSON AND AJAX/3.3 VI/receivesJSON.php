<?php


$josnReceived = $_REQUEST['json'];

//echo "The JSON reveivew was : " . $josnReceived;

echo (var_dump(json_decode(stripcslashes($josnReceived))));
?>