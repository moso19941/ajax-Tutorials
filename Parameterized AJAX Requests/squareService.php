<?php

$rows = $_REQUEST['rows'];
$cols = $_REQUEST['cols'];

for ($i=0; $i < $cols; $i++) { 
	
	for ($j=0; $j < $rows; $j++) { 
		echo "*";
	}
	echo "<br>";
}


?>