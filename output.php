
<?php
 $fieldA = $_POST["sexuality1"];
 $fieldB = $_POST["sexuality2"];
 $fieldC = $_POST["sexuality3"];

 $fieldD = $_POST["hobby1"];
 $fieldE = $_POST["hobby2"];
 $fieldF = $_POST["hobby3"];
 $fieldG = $_POST["hobby4"];
 $fieldH = $_POST["hobby5"];
 $fieldI = $_POST["hobby6"];
 $fieldJ = $_POST["hobby7"];
 $fieldK = $_POST["hobby8"];
 $fieldL = $_POST["hobby9"];
 $fieldM = $_POST["hobby10"];

 $keys = array($fieldA,$fieldB,$fieldC,$fieldD,$fieldE,$fieldF,$fieldG,$fieldH,$fieldI,$fieldJ,$fieldK,$fieldL,$fieldM); //THIS IS WHERE YOU PUT THE FORM ELEMENTS ex: array('$fieldA','$fieldB',etc)
 $csv_line = array();

 foreach($keys as $key){
    array_push($csv_line,'' . $_GET[$key]);
}

$fname = 'data.csv'; //NAME OF THE FILE
$csv_line = implode(',',$csv_line);
if(!file_exists($fname)){$csv_line = "\r\n" . $csv_line;}
$fcon = fopen($fname,'a');
$fcontent = $csv_line;
fwrite($fcon,$fcontent);
fclose($fcon);

?>