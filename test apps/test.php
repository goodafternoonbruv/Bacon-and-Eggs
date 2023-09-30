<?php
$fieldA = $_POST["textnames"];
$keys = array('id_number', 'first_name'); //FORM ELEMENTS
$csv_line = array();
foreach($keys as $key){

array_push($csv_line, '' . $_GET[$key]);
}

$fname = 'test.csv' //FILENAME
$csv_line = implode(',', $csv_line);
if(!file_exists($fname)){$csv_line = "\r\n" . $csv_line;}
$fcontent = $csv_line;
fwrite($fcon,$csv_line);
fclose($fcon);



?>